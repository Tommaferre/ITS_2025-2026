Answers to the question in the slides

A compiler and an interpreter are both tools that convert high-level programming code into machine code, but they work differently:

Compiler: Converts the entire source code into machine code at once, producing an executable file. Example languages: C, C++, Java (JVM bytecode).

Interpreter: Translates and runs code line by line, without generating an executable file. Example languages: Python, JavaScript, R.
### Key Differences between Compiler and Interpreter

| Feature              | Compiler                                    | Interpreter                              |
|----------------------|--------------------------------------------|------------------------------------------|
| **Execution Speed**   | Faster, since the code is precompiled.     | Slower, as it translates line by line.   |
| **Error Handling**    | Detects all errors **after** compilation.  | Stops execution immediately **when an error is found**. |
| **Memory Usage**      | Requires more memory (stores object code). | Uses less memory (no separate object code). |
| **Flexibility**       | Harder to modify (needs recompilation).    | Easier to modify and debug.             |
| **Portability**       | Produces a system-specific executable.     | Runs on any system with an interpreter installed. |
| **Security**          | Source code is hidden.                     | Source code is visible.                 |

### Levels of Programming Languages

| Category             | Description |
|----------------------|-------------|
| **Machine Languages** | The “native tongue” of the computer, the language closest to the hardware itself. Each unique computer has a unique machine language. A machine language program is made up of binary patterns (ex., 01011100) which represent simple operations that the computer can perform (ex., add two operands, move data to a memory location). Machine language programs are executable and can be run directly. |
| **Assembly Languages** | Assembly languages replace machine language instructions with simple mnemonic abbreviations (ex., ADD, MOV). They are unique to each computer. Before execution, an assembly program needs to be translated into machine language via an Assembler. |
| **High-Level Languages** | High-level languages like C, C++, and Java are more English-like, making it easier for programmers to think in the language. These languages require translation into machine language before execution. This translation is done via a **compiler** (ex., C++, Java) or an **interpreter** (ex., Python). |

bonus
### Machine language vs Assembly language
| Feature            | Machine Language | Assembly Language |
|--------------------|-----------------|-------------------|
| **Origin**        | Evolved from early computer systems in the 1930s-1940s. Used for direct hardware programming. | Invented by Kathleen Booth in 1947. Developed to simplify machine language programming. |
| **Development**   | Used in early computers like UNIVAC I. Still used in low-level software like firmware and drivers. | Used for home computers in the 1980s-1990s. Now used for embedded systems and performance-critical applications. |
| **Applications**  | Direct CPU control, debugging, and low-level software. | Embedded systems, real-time systems, and device drivers. Also used in cryptographic algorithms and reverse engineering. |
| **Use in Programming** | Directly writing programs is difficult and error-prone. Mainly used for debugging and patching. | Used for boot code, OS kernels, hardware interaction, and processor-specific instructions. |
| **Language Features** | Difficult for humans to read. Uses binary code. CPU executes it directly. | Uses mnemonics for readability. Supports macros, assembly directives, and comments. |
