// Generated from DekuRule.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DekuRuleListener = require('./DekuRuleListener').DekuRuleListener;
var grammarFileName = "DekuRule.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000fW\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003!\n\u0003\r\u0003\u000e",
    "\u0003\"\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004-\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u00052\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007?\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0006\tH\n\t\r\t\u000e\t",
    "I\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nP\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0002\f\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0002\u0002X\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006",
    ",\u0003\u0002\u0002\u0002\b1\u0003\u0002\u0002\u0002\n3\u0003\u0002",
    "\u0002\u0002\f>\u0003\u0002\u0002\u0002\u000e@\u0003\u0002\u0002\u0002",
    "\u0010G\u0003\u0002\u0002\u0002\u0012O\u0003\u0002\u0002\u0002\u0014",
    "Q\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u0014\u000b\u0002\u0017",
    "\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019",
    "\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a",
    "\u0003\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0005\u0010\t\u0002\u001d\u001e\u0007\u000b\u0002\u0002\u001e",
    "\u001f\u0007\n\u0002\u0002\u001f!\u0003\u0002\u0002\u0002 \u001c\u0003",
    "\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "\"#\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0005\u0010",
    "\t\u0002%&\u0007\u000b\u0002\u0002&\u0005\u0003\u0002\u0002\u0002\'",
    "(\u0007\t\u0002\u0002()\u0005\u0004\u0003\u0002)*\u0007\u0004\u0002",
    "\u0002*-\u0003\u0002\u0002\u0002+-\u0007\u000f\u0002\u0002,\'\u0003",
    "\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-\u0007\u0003\u0002\u0002",
    "\u0002.2\u0007\r\u0002\u0002/2\u0007\u000f\u0002\u000202\u0005\u000e",
    "\b\u00021.\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000210\u0003",
    "\u0002\u0002\u00022\t\u0003\u0002\u0002\u000234\u0005\u0006\u0004\u0002",
    "45\u0007\u0007\u0002\u000256\u0005\b\u0005\u00026\u000b\u0003\u0002",
    "\u0002\u000278\u0007\t\u0002\u000289\u0005\u0012\n\u00029:\u0007\u0004",
    "\u0002\u0002:?\u0003\u0002\u0002\u0002;?\u0007\u000f\u0002\u0002<?\u0007",
    "\r\u0002\u0002=?\u0005\u000e\b\u0002>7\u0003\u0002\u0002\u0002>;\u0003",
    "\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002",
    "?\r\u0003\u0002\u0002\u0002@A\u0007\f\u0002\u0002AB\u0007\b\u0002\u0002",
    "BC\u0007\u000f\u0002\u0002CD\u0007\u000b\u0002\u0002DE\u0007\u0003\u0002",
    "\u0002E\u000f\u0003\u0002\u0002\u0002FH\u0005\f\u0007\u0002GF\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002",
    "IJ\u0003\u0002\u0002\u0002J\u0011\u0003\u0002\u0002\u0002KP\u0005\u0004",
    "\u0003\u0002LP\u0005\n\u0006\u0002MP\u0005\f\u0007\u0002NP\u0005\u0010",
    "\t\u0002OK\u0003\u0002\u0002\u0002OL\u0003\u0002\u0002\u0002OM\u0003",
    "\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002P\u0013\u0003\u0002\u0002",
    "\u0002QR\u0007\u000f\u0002\u0002RS\u0007\u0005\u0002\u0002ST\u0005\u0012",
    "\n\u0002TU\u0007\u0006\u0002\u0002U\u0015\u0003\u0002\u0002\u0002\t",
    "\u0019\",1>IO"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "')'", "'}'", "'='", "';'", "'-'", "'('", "'{'", 
                     "'|'", null, "'ref'" ];

var symbolicNames = [ null, "CloseArguments", "CloseParenthesis", "DefineOperator", 
                      "DefinitionTerminator", "DifferenceOperator", "OpenArguments", 
                      "OpenParenthesis", "OrOperator", "PositiveInteger", 
                      "ReferenceCall", "String", "WhiteSpace", "WordName" ];

var ruleNames =  [ "root", "choiceWord", "differenceLhs", "differenceRhs", 
                   "differenceWord", "elementWord", "referenceWord", "sequenceWord", 
                   "word", "wordDefinition" ];

function DekuRuleParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DekuRuleParser.prototype = Object.create(antlr4.Parser.prototype);
DekuRuleParser.prototype.constructor = DekuRuleParser;

Object.defineProperty(DekuRuleParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DekuRuleParser.EOF = antlr4.Token.EOF;
DekuRuleParser.CloseArguments = 1;
DekuRuleParser.CloseParenthesis = 2;
DekuRuleParser.DefineOperator = 3;
DekuRuleParser.DefinitionTerminator = 4;
DekuRuleParser.DifferenceOperator = 5;
DekuRuleParser.OpenArguments = 6;
DekuRuleParser.OpenParenthesis = 7;
DekuRuleParser.OrOperator = 8;
DekuRuleParser.PositiveInteger = 9;
DekuRuleParser.ReferenceCall = 10;
DekuRuleParser.String = 11;
DekuRuleParser.WhiteSpace = 12;
DekuRuleParser.WordName = 13;

DekuRuleParser.RULE_root = 0;
DekuRuleParser.RULE_choiceWord = 1;
DekuRuleParser.RULE_differenceLhs = 2;
DekuRuleParser.RULE_differenceRhs = 3;
DekuRuleParser.RULE_differenceWord = 4;
DekuRuleParser.RULE_elementWord = 5;
DekuRuleParser.RULE_referenceWord = 6;
DekuRuleParser.RULE_sequenceWord = 7;
DekuRuleParser.RULE_word = 8;
DekuRuleParser.RULE_wordDefinition = 9;


function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.wordDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WordDefinitionContext);
    } else {
        return this.getTypedRuleContext(WordDefinitionContext,i);
    }
};

RootContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterRoot(this);
	}
};

RootContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitRoot(this);
	}
};




DekuRuleParser.RootContext = RootContext;

DekuRuleParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DekuRuleParser.RULE_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DekuRuleParser.WordName) {
            this.state = 20;
            this.wordDefinition();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ChoiceWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_choiceWord;
    return this;
}

ChoiceWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChoiceWordContext.prototype.constructor = ChoiceWordContext;

ChoiceWordContext.prototype.sequenceWord = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SequenceWordContext);
    } else {
        return this.getTypedRuleContext(SequenceWordContext,i);
    }
};

ChoiceWordContext.prototype.PositiveInteger = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DekuRuleParser.PositiveInteger);
    } else {
        return this.getToken(DekuRuleParser.PositiveInteger, i);
    }
};


ChoiceWordContext.prototype.OrOperator = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DekuRuleParser.OrOperator);
    } else {
        return this.getToken(DekuRuleParser.OrOperator, i);
    }
};


ChoiceWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterChoiceWord(this);
	}
};

ChoiceWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitChoiceWord(this);
	}
};




DekuRuleParser.ChoiceWordContext = ChoiceWordContext;

DekuRuleParser.prototype.choiceWord = function() {

    var localctx = new ChoiceWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DekuRuleParser.RULE_choiceWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 26;
        		this.sequenceWord();
        		this.state = 27;
        		this.match(DekuRuleParser.PositiveInteger);
        		this.state = 28;
        		this.match(DekuRuleParser.OrOperator);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 32; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 34;
        this.sequenceWord();
        this.state = 35;
        this.match(DekuRuleParser.PositiveInteger);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DifferenceLhsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_differenceLhs;
    return this;
}

DifferenceLhsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DifferenceLhsContext.prototype.constructor = DifferenceLhsContext;

DifferenceLhsContext.prototype.OpenParenthesis = function() {
    return this.getToken(DekuRuleParser.OpenParenthesis, 0);
};

DifferenceLhsContext.prototype.choiceWord = function() {
    return this.getTypedRuleContext(ChoiceWordContext,0);
};

DifferenceLhsContext.prototype.CloseParenthesis = function() {
    return this.getToken(DekuRuleParser.CloseParenthesis, 0);
};

DifferenceLhsContext.prototype.WordName = function() {
    return this.getToken(DekuRuleParser.WordName, 0);
};

DifferenceLhsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterDifferenceLhs(this);
	}
};

DifferenceLhsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitDifferenceLhs(this);
	}
};




DekuRuleParser.DifferenceLhsContext = DifferenceLhsContext;

DekuRuleParser.prototype.differenceLhs = function() {

    var localctx = new DifferenceLhsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DekuRuleParser.RULE_differenceLhs);
    try {
        this.state = 42;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DekuRuleParser.OpenParenthesis:
            this.enterOuterAlt(localctx, 1);
            this.state = 37;
            this.match(DekuRuleParser.OpenParenthesis);
            this.state = 38;
            this.choiceWord();
            this.state = 39;
            this.match(DekuRuleParser.CloseParenthesis);
            break;
        case DekuRuleParser.WordName:
            this.enterOuterAlt(localctx, 2);
            this.state = 41;
            this.match(DekuRuleParser.WordName);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DifferenceRhsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_differenceRhs;
    return this;
}

DifferenceRhsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DifferenceRhsContext.prototype.constructor = DifferenceRhsContext;

DifferenceRhsContext.prototype.String = function() {
    return this.getToken(DekuRuleParser.String, 0);
};

DifferenceRhsContext.prototype.WordName = function() {
    return this.getToken(DekuRuleParser.WordName, 0);
};

DifferenceRhsContext.prototype.referenceWord = function() {
    return this.getTypedRuleContext(ReferenceWordContext,0);
};

DifferenceRhsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterDifferenceRhs(this);
	}
};

DifferenceRhsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitDifferenceRhs(this);
	}
};




DekuRuleParser.DifferenceRhsContext = DifferenceRhsContext;

DekuRuleParser.prototype.differenceRhs = function() {

    var localctx = new DifferenceRhsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DekuRuleParser.RULE_differenceRhs);
    try {
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DekuRuleParser.String:
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this.match(DekuRuleParser.String);
            break;
        case DekuRuleParser.WordName:
            this.enterOuterAlt(localctx, 2);
            this.state = 45;
            this.match(DekuRuleParser.WordName);
            break;
        case DekuRuleParser.ReferenceCall:
            this.enterOuterAlt(localctx, 3);
            this.state = 46;
            this.referenceWord();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DifferenceWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_differenceWord;
    return this;
}

DifferenceWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DifferenceWordContext.prototype.constructor = DifferenceWordContext;

DifferenceWordContext.prototype.differenceLhs = function() {
    return this.getTypedRuleContext(DifferenceLhsContext,0);
};

DifferenceWordContext.prototype.DifferenceOperator = function() {
    return this.getToken(DekuRuleParser.DifferenceOperator, 0);
};

DifferenceWordContext.prototype.differenceRhs = function() {
    return this.getTypedRuleContext(DifferenceRhsContext,0);
};

DifferenceWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterDifferenceWord(this);
	}
};

DifferenceWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitDifferenceWord(this);
	}
};




DekuRuleParser.DifferenceWordContext = DifferenceWordContext;

DekuRuleParser.prototype.differenceWord = function() {

    var localctx = new DifferenceWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DekuRuleParser.RULE_differenceWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.differenceLhs();
        this.state = 50;
        this.match(DekuRuleParser.DifferenceOperator);
        this.state = 51;
        this.differenceRhs();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ElementWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_elementWord;
    return this;
}

ElementWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementWordContext.prototype.constructor = ElementWordContext;

ElementWordContext.prototype.OpenParenthesis = function() {
    return this.getToken(DekuRuleParser.OpenParenthesis, 0);
};

ElementWordContext.prototype.word = function() {
    return this.getTypedRuleContext(WordContext,0);
};

ElementWordContext.prototype.CloseParenthesis = function() {
    return this.getToken(DekuRuleParser.CloseParenthesis, 0);
};

ElementWordContext.prototype.WordName = function() {
    return this.getToken(DekuRuleParser.WordName, 0);
};

ElementWordContext.prototype.String = function() {
    return this.getToken(DekuRuleParser.String, 0);
};

ElementWordContext.prototype.referenceWord = function() {
    return this.getTypedRuleContext(ReferenceWordContext,0);
};

ElementWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterElementWord(this);
	}
};

ElementWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitElementWord(this);
	}
};




DekuRuleParser.ElementWordContext = ElementWordContext;

DekuRuleParser.prototype.elementWord = function() {

    var localctx = new ElementWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DekuRuleParser.RULE_elementWord);
    try {
        this.state = 60;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DekuRuleParser.OpenParenthesis:
            this.enterOuterAlt(localctx, 1);
            this.state = 53;
            this.match(DekuRuleParser.OpenParenthesis);
            this.state = 54;
            this.word();
            this.state = 55;
            this.match(DekuRuleParser.CloseParenthesis);
            break;
        case DekuRuleParser.WordName:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.match(DekuRuleParser.WordName);
            break;
        case DekuRuleParser.String:
            this.enterOuterAlt(localctx, 3);
            this.state = 58;
            this.match(DekuRuleParser.String);
            break;
        case DekuRuleParser.ReferenceCall:
            this.enterOuterAlt(localctx, 4);
            this.state = 59;
            this.referenceWord();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReferenceWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_referenceWord;
    return this;
}

ReferenceWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceWordContext.prototype.constructor = ReferenceWordContext;

ReferenceWordContext.prototype.ReferenceCall = function() {
    return this.getToken(DekuRuleParser.ReferenceCall, 0);
};

ReferenceWordContext.prototype.OpenArguments = function() {
    return this.getToken(DekuRuleParser.OpenArguments, 0);
};

ReferenceWordContext.prototype.WordName = function() {
    return this.getToken(DekuRuleParser.WordName, 0);
};

ReferenceWordContext.prototype.PositiveInteger = function() {
    return this.getToken(DekuRuleParser.PositiveInteger, 0);
};

ReferenceWordContext.prototype.CloseArguments = function() {
    return this.getToken(DekuRuleParser.CloseArguments, 0);
};

ReferenceWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterReferenceWord(this);
	}
};

ReferenceWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitReferenceWord(this);
	}
};




DekuRuleParser.ReferenceWordContext = ReferenceWordContext;

DekuRuleParser.prototype.referenceWord = function() {

    var localctx = new ReferenceWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, DekuRuleParser.RULE_referenceWord);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(DekuRuleParser.ReferenceCall);
        this.state = 63;
        this.match(DekuRuleParser.OpenArguments);
        this.state = 64;
        this.match(DekuRuleParser.WordName);
        this.state = 65;
        this.match(DekuRuleParser.PositiveInteger);
        this.state = 66;
        this.match(DekuRuleParser.CloseArguments);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SequenceWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_sequenceWord;
    return this;
}

SequenceWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceWordContext.prototype.constructor = SequenceWordContext;

SequenceWordContext.prototype.elementWord = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementWordContext);
    } else {
        return this.getTypedRuleContext(ElementWordContext,i);
    }
};

SequenceWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterSequenceWord(this);
	}
};

SequenceWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitSequenceWord(this);
	}
};




DekuRuleParser.SequenceWordContext = SequenceWordContext;

DekuRuleParser.prototype.sequenceWord = function() {

    var localctx = new SequenceWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, DekuRuleParser.RULE_sequenceWord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 68;
            this.elementWord();
            this.state = 71; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DekuRuleParser.OpenParenthesis) | (1 << DekuRuleParser.ReferenceCall) | (1 << DekuRuleParser.String) | (1 << DekuRuleParser.WordName))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_word;
    return this;
}

WordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WordContext.prototype.constructor = WordContext;

WordContext.prototype.choiceWord = function() {
    return this.getTypedRuleContext(ChoiceWordContext,0);
};

WordContext.prototype.differenceWord = function() {
    return this.getTypedRuleContext(DifferenceWordContext,0);
};

WordContext.prototype.elementWord = function() {
    return this.getTypedRuleContext(ElementWordContext,0);
};

WordContext.prototype.sequenceWord = function() {
    return this.getTypedRuleContext(SequenceWordContext,0);
};

WordContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterWord(this);
	}
};

WordContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitWord(this);
	}
};




DekuRuleParser.WordContext = WordContext;

DekuRuleParser.prototype.word = function() {

    var localctx = new WordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, DekuRuleParser.RULE_word);
    try {
        this.state = 77;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 73;
            this.choiceWord();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 74;
            this.differenceWord();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 75;
            this.elementWord();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 76;
            this.sequenceWord();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WordDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DekuRuleParser.RULE_wordDefinition;
    return this;
}

WordDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WordDefinitionContext.prototype.constructor = WordDefinitionContext;

WordDefinitionContext.prototype.WordName = function() {
    return this.getToken(DekuRuleParser.WordName, 0);
};

WordDefinitionContext.prototype.DefineOperator = function() {
    return this.getToken(DekuRuleParser.DefineOperator, 0);
};

WordDefinitionContext.prototype.word = function() {
    return this.getTypedRuleContext(WordContext,0);
};

WordDefinitionContext.prototype.DefinitionTerminator = function() {
    return this.getToken(DekuRuleParser.DefinitionTerminator, 0);
};

WordDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.enterWordDefinition(this);
	}
};

WordDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DekuRuleListener ) {
        listener.exitWordDefinition(this);
	}
};




DekuRuleParser.WordDefinitionContext = WordDefinitionContext;

DekuRuleParser.prototype.wordDefinition = function() {

    var localctx = new WordDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, DekuRuleParser.RULE_wordDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(DekuRuleParser.WordName);
        this.state = 80;
        this.match(DekuRuleParser.DefineOperator);
        this.state = 81;
        this.word();
        this.state = 82;
        this.match(DekuRuleParser.DefinitionTerminator);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.DekuRuleParser = DekuRuleParser;