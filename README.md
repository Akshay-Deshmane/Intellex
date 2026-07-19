# Intellex => (Autonomous AI Coding Agent & Remote Developer Assistant)

Intellex is a powerful **agentic AI developer assistant** built with **TypeScript, Bun, the Vercel AI SDK, OpenRouter, Firecrawl, and Telegraf**. It combines **intelligent planning, tool-based execution, secure workspace automation, and Telegram-based remote control** into a unified developer experience.

Unlike traditional AI chatbots, Intellex follows a **plan → reason → execute → approve** workflow. Every file modification is staged, reviewed, and applied only after explicit user approval, providing a safe and controlled coding experience.

---

# Overview =>

Intellex is designed as a modular AI agent runtime capable of understanding software projects, planning implementation strategies, reviewing code, analyzing repositories, and automating development tasks.

It features:

- Autonomous planning engine
- Tool-based AI execution
- Local workspace intelligence
- Telegram remote control
- Human-in-the-loop approval
- Optional web research using Firecrawl
- Secure filesystem sandboxing

---

# Features =>

- Intelligent Planning Mode
- Autonomous Agent Mode
- Ask Mode (read-only project assistant)
- Telegram-based remote execution
- Codebase analysis
- File search & navigation
- Read/Create/Modify/Delete files
- Folder creation
- Shell command staging
- Code review capabilities
- Skill discovery (Cursor / Claude SKILL.md)
- Optional web search & crawling
- Workspace sandboxing
- Approval-based execution
- Action tracking
- Structured tool calling using Zod

---

# Project Architecture =>

```text
                 User
          ┌──────┴──────┐
          │             │
        CLI         Telegram
          │             │
          └──────┬──────┘
                 │
          Intellex Runtime
                 │
      ┌──────────┼──────────┐
      │          │          │
   Ask Mode  Plan Mode  Agent Mode
      │          │          │
      └──────────┼──────────┘
                 │
          Tool Selection
                 │
      ┌──────────┼──────────┐
      │          │          │
 File Tools  Web Tools  Skill Loader
                 │
          Tool Executor
                 │
          Action Tracker
                 │
        Approval Workflow
                 │
         Apply Approved Changes
```

---

# AI Workflow =>

```text
User Goal
   │
   ▼
Planning Engine
   │
Workspace Research
   │
Optional Web Research
   │
Structured Execution Plan
   │
Tool Calling Agent
   │
Tool Executor
   │
Action Tracker
   │
Approval
   │
Apply Changes
```

---

# Tech Stack =>

| Technology | Purpose |
|------------|---------|
| TypeScript | Primary language |
| Bun | Runtime |
| Vercel AI SDK | Agent framework |
| OpenRouter | LLM Provider |
| Firecrawl | Web search & crawling |
| Telegraf | Telegram Bot |
| Commander | CLI |
| Zod | Schema validation |
| Chalk | Terminal UI |
| Clack | Interactive prompts |
| Marked | Markdown rendering |

---

# Installation & Setup =>

```bash
git clone https://github.com/Akshay-Deshmane/intellex.git
cd intellex

bun install
```

---

## Environment Variables =>

Create a `.env` file:

```env
openrouter_api_key=YOUR_OPENROUTER_API_KEY
openrouter_default_model=openai/gpt-4.1-mini

FIRECRAWL_API_KEY=YOUR_FIRECRAWL_KEY

TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
```

---

# Run Intellex =>

```bash
bun run index.ts wakeup
```

or

```bash
Intellex wakeup
```

---

# Modes =>

## Ask Mode

- Read-only access
- Analyze repositories
- Explain code
- Search files
- Research project structure

## Plan Mode

- Understand user goals
- Analyze workspace
- Perform optional web research
- Generate structured execution plans
- Estimate task complexity

## Agent Mode

- Execute multi-step tasks
- Read/Create/Edit/Delete files
- Queue shell commands
- Track every action
- Request approval before applying changes

---

# Telegram Integration =>

Intellex can be controlled remotely through Telegram.

Capabilities include:

- Ask questions about your project
- Execute coding tasks
- Run implementation plans
- Approve staged changes
- Monitor agent execution remotely

---

# Core Capabilities =>

### Workspace Intelligence

- Read project files
- Search files
- Analyze repository
- List folders
- Discover project structure

### Autonomous Development

- Create files
- Modify files
- Delete files
- Create folders
- Execute terminal commands (approval required)

### Web Intelligence

- Search documentation
- Crawl websites
- Fetch online resources

### Skill System

- Discover Cursor skills
- Discover Claude skills
- Read SKILL.md instructions

---

# Engineering Concepts =>

## Agentic AI

Intellex separates reasoning from execution by using a planning engine and a tool-based runtime.

## Tool Calling

All capabilities are exposed as strongly typed tools validated using Zod, enabling reliable AI-driven execution.

## Human-in-the-Loop Safety

Every mutating operation is staged in memory and requires explicit user approval before being written to disk.

## Workspace Sandboxing

Filesystem operations are restricted to the configured workspace, preventing unsafe path traversal and accidental edits outside the project.

## Modular Runtime

The architecture cleanly separates planning, execution, tools, Telegram integration, and terminal interfaces, making the system easy to extend.

---

# Security Features =>

- Workspace isolation
- Path validation
- Pending change staging
- Approval workflow
- Safe shell execution
- Read-only planning mode
- Excluded file protection

---

# Project Structure =>

```text
Intellex/
├── ai/
├── modes/
│   ├── agents/
│   ├── plan/
│   └── telegram/
├── tui/
├── index.ts
├── package.json
└── README.md
```

---

# Future Enhancements =>

- Git integration
- Pull request review
- Automatic commit generation
- Persistent memory
- Multi-agent collaboration
- Browser automation
- MCP (Model Context Protocol)
- IDE extension
- REST API
- Docker deployment

---