import chalk from "chalk";
import {select, isCancel} from "@clack/prompts";


export async function runCliMode() {

    while(true) {
        
        const mode = await select({
            message : "Choose CLI sub mode",
            options : [
                {value : "agent", label : "Agent Mode"},
                {value : "plan", label : "Plan Mode"},
                {value : "ask", label : "Ask Mode"},
                {value : "back", label : "← Back to main menu"},
            ],
        });

        if(isCancel(mode) || mode === "back") {
            return;
        }
        if(mode === "agent") {
           console.log("Agent mode is called");
        }
        if(mode === "ask") {
           console.log("Ask mode is called");
        }
        if(mode === "plan") {
          console.log("Plan mode is called");
        }
        if(mode !== "agent" && mode !== "ask" && mode !== "plan") {
          console.log(chalk.red("That mode is not implemented yet..."));
        }

    }
}
