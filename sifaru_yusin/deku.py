"""kekurE dEku."""
import typing as t

__pragma__(  # noqa: F821
    "js",
    "{}",
    """
    const { CommonTokenStream, InputStream } = require("antlr4");
    const { DekuRuleLexer } = require("../sifaru_yusin/DekuRuleLexer");
    const { DekuRuleParser } = require("../sifaru_yusin/DekuRuleParser");
    """,
)

CommonTokenStream: t.Any = 0  # __:skip
Date: t.Any = 0  # __:skip
DekuRuleLexer: t.Any = 0  # __:skip
DekuRuleParser: t.Any = 0  # __:skip
InputStream: t.Any = 0  # __:skip

# VOWELS = choice(
#     probability("a", 1),
#     probability("i", 1),
#     probability("u", 1),
# )
#
# CONSONANTS = choice(
#   probability("F", 3),
#   probability("P", 1),
#   probability("B", 1),
#   probability("M", 3),
#   probability("S", 3),
#   probability("Z", 2),
#   probability("T", 3),
#   probability("D", 3),
#   probability("N", 5),
#   probability("X", 1),
#   probability("J", 1),
#   probability("C", 1),
#   probability("R", 5),
#   probability("K", 3),
#   probability("G", 2),
#   probability("H", 3),
#   probability("ʻ", 3),
# )
#
# DEKUGA = choice(
#     probability(
#         sequence(
#             one_of(CONSONANTS),
#             one_of(VOWELS),
#             choice(
#                 probability(reference(VOWELS, 0), 2),
#                 probability(difference(VOWELS, reference(VOWELS, 0)), 1),
#             ),
#             choice(
#                 probability(reference(CONSONANTS, 0), 1),
#                 probability(difference(CONSONANTS, reference(CONSONANTS, 0)), 1),
#             ),
#         ),
#         2,
#     ),
# )

RULES = """
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


class Visitor:
    def visitChildren(self, context):
        if not context:
            return
        if context.children:
            children = []
            for child in context.children:
                if child.children and len(child.children) != 0:
                    children.append(child.accept(self))
                else:
                    children.append(child.getText())
            return children


def kekure():
    """Kekure dEku."""
    chars = __new__(InputStream(RULES))  # noqa: F821
    lexer = __new__(DekuRuleLexer(chars))  # noqa: F821
    tokens = __new__(CommonTokenStream(lexer))  # noqa: F821
    parser = __new__(DekuRuleParser(tokens))  # noqa: F821
    parser.buildParseTrees = True
    tree = parser.root()
    tree.accept(Visitor())
    window.tree = tree
    console.info(tree)
    return Date.now().toString()
