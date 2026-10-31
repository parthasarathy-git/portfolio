// Edit this file to update the site. Every claim here comes from the resume.
export const profile = {
  name: "Parthasarathy M",
  role: "Software engineer",
  focus: "AI agent systems and developer tools",
  location: "Chennai, India",
  summary:
    "I build AI agent systems and developer tools in TypeScript. At Syncfusion I contribute to Boldcreate, an AI developer platform made up of a Tauri desktop app, a CLI, and a cloud agent, and I am a core developer of Syncfusion Code Studio.",
  email: "parthasarathyvenkidusamym@gmail.com",
  github: "https://github.com/parthasarathy-git",
  linkedin: "https://www.linkedin.com/in/parthasarathyyy-m/",
};

export const experience = {
  title: "Software engineer",
  company: "Syncfusion",
  period: "December 2024 to present",
  place: "Chennai, India",
  bullets: [
    "Contribute to Boldcreate, an AI developer platform with a Tauri desktop app, a CLI, and a cloud agent.",
    "Core developer of Syncfusion Code Studio, a customized VS Code-based development environment.",
    "Built Multiple Model Context Protocol (MCP) servers that connect AI agents to external developer tools and services.",
    "Built internal developer tools and VS Code extensions with Node.js and React.",
    "Ran internal sessions on Spec-Driven Development, introducing OpenSpec and Spec Kit.",
  ],
};

export type Project = {
  id: string;
  name: string;
  status: string;
  summary: string;
  role: string;
  built: string[];
  stack?: string[];
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "boldcreate",
    name: "boldcreate",
    status: "in production at Syncfusion",
    summary:
      "An AI-powered developer platform made up of a Tauri desktop application, a CLI, and a cloud agent.",
    role: "Contributor",
    built: [
      "The integrated terminal in the desktop app, including remote terminal access through the cloud agent, with command execution and live output streaming.",
      "@-mention file referencing in the chat interface, so users can attach project files as context inside a prompt.",
      "Configurable custom agents on a Pi Agent-based SDK, each with its own system prompt, tools, and capabilities.",
      "Helped establish the first Agent Client Protocol (ACP) integration, which exposes CLI agent capabilities to external clients such as Zed.",
      "Contributed to the build and release pipelines for the CLI and desktop apps.",
    ],
    stack: ["TypeScript", "Tauri", "Pi Agent SDK", "ACP", "CI/CD"],
  },
  {
    id: "developer-tools",
    name: "code-studio-and-mcp",
    status: "in production at Syncfusion",
    summary:
      "Syncfusion Code Studio, a customized VS Code-based development environment, and the AI integrations and internal tooling around it.",
    role: "Core developer",
    built: [
      "Four MCP servers, built with the MCP SDK, that connect AI agents to external developer tools and services.",
      "Internal developer tools and VS Code extensions with Node.js and React, aimed at developer productivity.",
      "Features and workflow improvements shipped in bi-weekly product releases.",
      "Internal sessions on Spec-Driven Development, covering OpenSpec and Spec Kit.",
    ],
    stack: ["TypeScript", "VS Code extensions", "MCP", "Node.js", "React.js"],
  },
  {
    id: "relay",
    name: "relay",
    status: "in development",
    summary:
      "A desktop client for the OpenCode CLI. It gives terminal-based AI coding workflows a dedicated graphical interface, modeled on desktop clients such as Claude Code and Codex.",
    role: "Sole developer",
    built: [
      "Building the whole application on my own, from architecture to UI.",
      "A Tauri, React, and TypeScript app wrapped around the OpenCode CLI.",
    ],
    stack: ["TypeScript", "React.js", "Tauri", "OpenCode CLI"],
    links: [{ label: "github.com/parthasarathy-git/relay", url: "https://github.com/parthasarathy-git/relay" }],
  },
  {
    id: "continue",
    name: "continue-openrouter",
    status: "merged, released in v1.42.0",
    summary:
      "An open-source contribution to Continue, an open-source AI coding assistant: OpenRouter support as a model provider.",
    role: "Contributor",
    built: [
      "Added OpenRouter as a model provider.",
      "Dynamic model loading, so the available models come from OpenRouter instead of a fixed list.",
      "A fuzzy-search model selector.",
    ],
    links: [{ label: "Pull request #8738", url: "https://github.com/continuedev/continue/pull/8738" }],
  },
];

export const skills: [string, string][] = [
  ["languages", "TypeScript"],
  ["frontend and desktop", "React.js, Tauri"],
  ["backend", "Node.js"],
  ["ai_agents", "Pi Agent SDK, custom agents, agent orchestration, agent workflows, MCP, ACP"],
  ["dev_tools", "VS Code extension development, CLI development, Git, Linux"],
  ["infrastructure", "CI/CD, build pipelines"],
];

export const education = {
  degree: "B.E. Computer Science and Engineering",
  school: "Bannari Amman Institute of Technology",
  period: "2019 to 2023",
};
