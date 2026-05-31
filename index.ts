#!/usr/bin/env bun

import { Command } from "commander";
import { runwakeup } from "./tui/wakeup";

const program = new Command();

program.name("Intellex").description("Intellex").version("0.0.1");

program.command("wakeup").description("show the banner and pick CLI or Telegram mode").action(
    async()=>{
        await runwakeup();
    }
);

await program.parseAsync(process.argv);