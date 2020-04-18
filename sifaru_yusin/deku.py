"""kekurE dEku."""
import random
import typing as t

__pragma__(  # noqa: F821
    "js",
    "{}",
    """
    const antlr4 = require("antlr4");
    const { DekuRuleLexer } = require("../sifaru_yusin/DekuRuleLexer");
    const { DekuRuleListener } = require("../sifaru_yusin/DekuRuleListener");
    const { DekuRuleParser } = require("../sifaru_yusin/DekuRuleParser");
    """,
)

DekuRuleLexer: t.Any = 0  # __:skip
DekuRuleListener: t.Any = 0  # __:skip
DekuRuleParser: t.Any = 0  # __:skip
antlr4: t.Any = 0  # __:skip


class Kekuria:
    def __init__(self, rule_definitions: RuleDefinitions):
        self.generated_words = []
        self.references = []
        self.rule_definitions = rule_definitions

    def get_reference(self, rule_name: str, position: int) -> str:
        return filter(lambda reference: reference[0] == rule_name, self.references)[
            position
        ][1]

    def get_rule(self, rule_name: str) -> Rule:
        return self.rule_definitions.definitions[rule_name]

    def kekure(self, rule_name: str) -> str:
        word = self.rule_definitions.kekure(rule_name, self)
        # self.references.append((rule_name, word))
        return word

    def push_reference(self, rule_name: str, word: str) -> None:
        self.references.append((rule_name, word))


class RuleDefinitions:
    """
    A set of dEku rule definitions.

    RuleDefinitions should not have state.
    """

    def __init__(self):
        self.definitions = {}

    def define(self, rule_name, rule) -> None:
        self.definitions[rule_name] = rule

    def kekure(self, rule_name: str, kekuria: Kekuria) -> str:
        return self.definitions[rule_name].kekure(kekuria)


class Rule:
    """
    dEku Rule interface.

    Rule should not have state.
    """

    def kekure(self, kekuria: Kekuria) -> str:
        """Generate a word."""
        raise NotImplementedError("Rule#kekure should be implemented in the sub class.")


class ChoiceRuleItem:
    """An item of a ChoiceRule."""

    def __init__(self, rule: Rule, weight: int):
        self.rule = rule
        self.weight = weight


class ChoiceRule(Rule):
    def __init__(self, items: [ChoiceRuleItem]):
        self.items = items

    def kekure(self, kekuria: Kekuria) -> str:
        gauge = sum(map(lambda item: item.weight, self.items)) * random.random()
        meter = 0
        for item in self.items:
            meter = meter + item.weight
            if meter > gauge:
                return item.rule.kekure(kekuria)


class DifferenceRule(Rule):
    def __init__(self, lhs: Rule, rhs: Rule):
        self.lhs = lhs
        self.rhs = rhs

    def kekure(self, kekuria: Kekuria) -> str:
        if isinstance(self.lhs, tuple) and self.lhs[0] == "WordName":
            lhs = kekuria.get_rule(self.lhs[1])
        else:
            lhs = self.lhs
        if not isinstance(lhs, ChoiceRule):
            raise Exception("Can't get a difference except from a ChoiceRule.")
        if isinstance(self.rhs, tuple) and self.rhs[0] == "WordName":
            rhs = kekuria.get_rule(self.rhs[1])
        elif isinstance(self.rhs, ReferenceRule):
            rhs = StringRule(self.rhs.kekure(kekuria))
        else:
            rhs = self.rhs
        if isinstance(rhs, ChoiceRule):
            rhs_values = []
            for item in rhs.items:
                if not isinstance(item.rule, StringRule):
                    raise Exception(
                        "Can't get a difference by a ChoiceRule of not StringRule-s."
                    )
                rhs_values.append(item.rule.value)
        elif isinstance(rhs, StringRule):
            rhs_values = [rhs.value]
        else:
            raise Exception(
                "Can't get a difference except by a ChoiceRule or a StringRule."
            )
        new_items = []
        for item in lhs.items:
            if not isinstance(item.rule, StringRule):
                raise Exception(
                    "Can't get a difference except from a ChoiceRule of StringRule-s."
                )
            if item.rule.value not in rhs_values:
                new_items.append(item)
        word = ChoiceRule(new_items).kekure(kekuria)
        if isinstance(self.lhs, tuple) and self.lhs[0] == "WordName":
            kekuria.push_reference(self.lhs[1], word)
        return word


class ReferenceRule(Rule):
    def __init__(self, rule_name: str, position: int):
        self.rule_name = rule_name
        self.position = position

    def kekure(self, kekuria: Kekuria) -> str:
        return kekuria.get_reference(self.rule_name, self.position)


class SequenceRule(Rule):
    def __init__(self, children: [Rule]):
        self.children = children

    def kekure(self, kekuria: Kekuria) -> str:
        words = []
        for child in self.children:
            if isinstance(child, Rule):
                words.append(child.kekure(kekuria))
            elif isinstance(child, tuple) and child[0] == "WordName":
                rule_name = child[1]
                word = kekuria.kekure(rule_name)
                kekuria.push_reference(rule_name, word)
                words.append(word)
        return "".join(words)


class StringRule(Rule):
    def __init__(self, value: str):
        self.value = value

    def kekure(self, kekuria: Kekuria) -> str:
        return self.value


class Visitor:
    def visitChildren(self, context):
        rule_name = context.parser.ruleNames[context.ruleIndex]
        if rule_name == "root":
            return self.__visit_root(context)
        elif rule_name == "choiceWord":
            return self.__visit_choiceWord(context)
        elif rule_name == "differenceLhs":
            return self.__visit_differenceLhs(context)
        elif rule_name == "differenceRhs":
            return self.__visit_differenceRhs(context)
        elif rule_name == "differenceWord":
            return self.__visit_differenceWord(context)
        elif rule_name == "elementWord":
            return self.__visit_elementWord(context)
        elif rule_name == "referenceWord":
            return self.__visit_referenceWord(context)
        elif rule_name == "sequenceWord":
            return self.__visit_sequenceWord(context)
        elif rule_name == "word":
            return self.__visit_word(context)
        elif rule_name == "wordDefinition":
            return self.__visit_wordDefinition(context)
        else:
            raise Exception("Unknown rule: {}".format(rule_name))

    def visitTerminal(self, context):
        symbolic_name = context.parentCtx.parser.symbolicNames[context.symbol["type"]]
        if symbolic_name == "CloseArguments":
            return None
        elif symbolic_name == "CloseParenthesis":
            return ("CloseParenthesis",)
        elif symbolic_name == "DefineOperator":
            return None
        elif symbolic_name == "DefinitionTerminator":
            return None
        elif symbolic_name == "DifferenceOperator":
            return None
        elif symbolic_name == "OpenArguments":
            return None
        elif symbolic_name == "OpenParenthesis":
            return ("OpenParenthesis",)
        elif symbolic_name == "OrOperator":
            return None
        elif symbolic_name == "PositiveInteger":
            return ("PositiveInteger", int(context.getText()))
        elif symbolic_name == "ReferenceCall":
            return None
        elif symbolic_name == "String":
            return StringRule(eval(context.getText()))
        elif symbolic_name == "WhiteSpace":
            raise Exception("WhiteSpace must skip by the parser.")
        elif symbolic_name == "WordName":
            return ("WordName", context.getText())
        else:
            raise Exception("Unknown symbol: {}".format(symbolic_name))

    def __visit_root(self, context):
        rule_definitions = RuleDefinitions()
        for child in context.children:
            word_definition = child.accept(self)
            rule_definitions.define(
                word_definition["word_name"], word_definition["word"]
            )
        return rule_definitions

    def __visit_choiceWord(self, context):
        rule = None
        choiceRuleItems = []
        for child in context.children:
            node = child.accept(self)
            if isinstance(node, Rule):
                rule = node
            elif isinstance(node, tuple) and node[0] == "PositiveInteger":
                if rule is None:
                    raise Exception(
                        "Choice probability must followed by a sequence rule."
                    )
                choiceRuleItems.append(ChoiceRuleItem(rule, node[1]))
                rule = None
            elif node is None:
                pass
            else:
                raise Exception("Unexpected node : {}".format(node))
        return ChoiceRule(choiceRuleItems)

    def __visit_differenceLhs(self, context):
        children = map(lambda child: child.accept(self), context.children)
        if len(children) == 3:
            return children[1]
        elif len(children) == 1:
            return children[0]
        else:
            raise Exception("Invalid difference lhs: {}".format(children))

    def __visit_differenceRhs(self, context):
        return context.children[0].accept(self)

    def __visit_differenceWord(self, context):
        [lhs, _, rhs] = map(lambda child: child.accept(self), context.children)
        return DifferenceRule(lhs, rhs)

    def __visit_elementWord(self, context):
        children = map(lambda child: child.accept(self), context.children)
        if len(children) == 3:
            return children[1]
        elif len(children) == 1:
            return children[0]
        else:
            raise Exception("Invalid element word: {}".format(children))

    def __visit_referenceWord(self, context):
        [_, _, word_name, position, _] = map(
            lambda child: child.accept(self), context.children
        )
        return ReferenceRule(word_name[1], position[1])

    def __visit_sequenceWord(self, context):
        children = map(lambda child: child.accept(self), context.children)
        if len(children) == 1:
            return children[0]
        return SequenceRule(children)

    def __visit_word(self, context):
        return context.children[0].accept(self)

    def __visit_wordDefinition(self, context):
        [word_name, _, word, _] = map(
            lambda child: child.accept(self), context.children
        )
        return {"word_name": word_name[1], "word": word}


class DekuRuleListener_py:
    def __init__(self):
        self.original = __new__(DekuRuleListener())  # noqa: F821

    def visitTerminal(self, node):
        return self.original.visitTerminal(node)

    def visitErrorNode(self, node):
        return self.original.visitErrorNode(node)

    def enterEveryRule(self, node):
        return self.original.enterEveryRule(node)

    def exitEveryRule(self, node):
        return self.original.exitEveryRule(node)


class DekuRulePrinter(DekuRuleListener_py):
    pass


def parse_deku_rule(deku_rule: str) -> RuleDefinitions:
    chars = __new__(antlr4.InputStream(deku_rule))  # noqa: F821
    lexer = __new__(DekuRuleLexer(chars))  # noqa: F821
    tokens = __new__(antlr4.CommonTokenStream(lexer))  # noqa: F821
    parser = __new__(DekuRuleParser(tokens))  # noqa: F821
    parser.buildParseTrees = True
    tree = parser.root()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(DekuRulePrinter(), tree)
    rule_definitions = tree.accept(Visitor())
    window.rule_definitions = rule_definitions
    return rule_definitions


DEKU_RULES = """
V = "a" 1 | "i" 1 | "u" 1 ;

C = "F" 3 |
    "P" 1 |
    "B" 1 |
    "M" 3 |
    "S" 3 |
    "Z" 2 |
    "T" 3 |
    "D" 3 |
    "N" 5 |
    "X" 1 |
    "J" 1 |
    "C" 1 |
    "R" 5 |
    "K" 3 |
    "G" 2 |
    "H" 3 |
    "ʻ" 3 ;

DEKU =
    { C
      V
      { ref(V 0) 2 | { V - ref(V 0) } 1 }
      { ref(C 0) 1 | { C - ref(C 0) } 1 } } 2 |
    { C
      V
      { ref(C 0) 1 | { C - ref(C 0) } 1 }
      { ref(V 0) 2 | { V - ref(V 0) } 1 } } 2 |
    { V
      C
      { ref(V 0) 2 | { V - ref(V 0) } 1 }
      { ref(C 0) 1 | { C - ref(C 0) } 1 } } 2 |
    { V
      { C - "ʻ" }
      { ref(C 0) 1 | { C - ref(C 0) } 1 }
      { ref(V 0) 2 | { V - ref(V 0) } 1 } } 2 |
    { C V } 1 |
    { V C } 1 ;
"""

DEKU_RULE_DEFINITIONS = parse_deku_rule(DEKU_RULES)


def kekure():
    """Kekure dEku."""
    return Kekuria(DEKU_RULE_DEFINITIONS).kekure("DEKU")
