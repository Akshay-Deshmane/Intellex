import type { ActionLog, ActionStatus } from "./types"
import { isMutationType } from "./types"

export class ActionTracker {

    private actions : ActionLog[] = [];

    /*
     *  Log Action only to push the actions into the ActionLog array 
    */
    log(
        entry : Omit<ActionLog, 'id' | 'timestamp'> & {
          id? : string,
          timestamp? : Date,
        },
    ) : ActionLog {
        const action : ActionLog = {
        id: entry.id ?? `action_${this.actions.length}`,
        timestamp: entry.timestamp ?? new Date(),
        type: entry.type,
        path: entry.path,
        details: { ...entry.details },
        status: entry.status,
        userApproved: entry.userApproved,
        };
        this.actions.push(action);
        return action;
    };
  
    /*
     * It only returns all the actions present in the ActionLog array  
     */
    getActions() : readonly ActionLog[] {
        return this.actions;
    };
 
    /**
     * It returns the actions that have mutation type and there status is pending 
     */
    getPendingMutations() : ActionLog[] {
        return this.actions.filter(
            (a) => isMutationType(a.type) && a.status === "pending"
        )
    };

    updateStatus(id : string, status : ActionStatus, userApproved?: boolean) : void {
        const a = this.actions.find((x)=> x.id === id);

        if(!a) {
            return;
        }

        a.status = status;

        if(userApproved !== undefined) {
            a.userApproved = userApproved;
        }
    };

}