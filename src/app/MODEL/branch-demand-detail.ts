export interface BranchDemandDetail {

    probableCashOnHand:number,
    previousDayCashOnHand:number,
    soiledCurrencyAmount:number,
    otherBankAc:string,
    excessCashHoldJustification:string,
    retentionLimit:number,
    retentionLimitPercentage:number,

    cashDemand:number,
    demandReason:string,
    priorityFlag:string,
    brcode:string,
    branchName:string,
    blockName:String,
    region:string,
    demandStatus:string,
    demandStatusFlag:string,
    demandSubmitBy:string
}


// export interface UserModelData {
//     u_id: string;
//     u_type: string;
//     brcode: string;
//     roname: string;
//     u_status: string;
//     u_loc: string;
//     u_name: string;
 
//   }

