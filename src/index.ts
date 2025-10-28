import { CharStreams, CommonTokenStream } from "antlr4ts";
import { RedLangParser } from "./generated/RedLangParser";
import { RedLangLexer } from "./generated/RedLangLexer";
import CompilerVisitor from "./visitors/CompilerVisitor";
import { printTree } from "./utils/printTree";
import LLVMVisitor from "./visitors/LLVMVisitor";
import { allTests } from "./test/codeExamples";
import { writeFileSync } from "fs";

//lexer stage whit char stream

const codeExam = ``;

const codeInput = CharStreams.fromString(allTests.test_16_fizzbuzz); // divide string in chars example (d - e - c - l - r - e)
const lexer = new RedLangLexer(codeInput);
const token = new CommonTokenStream(lexer);

//parser stage
const parser = new RedLangParser(token);

const tree = parser.program();

const visitor = new CompilerVisitor();

visitor.visit(tree);

// Building LLVM

// const llvmVisitor = new LLVMVisitor();

// llvmVisitor.visit(tree); 

// const ir = llvmVisitor.dumpIR();

// writeFileSync("output.ll", ir);

// if (parser.numberOfSyntaxErrors < 1) printTree(tree);
// else {
//   console.log("Hay errores");
// }
