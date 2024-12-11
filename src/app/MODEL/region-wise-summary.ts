export interface RegionWiseSummary {

    retentionLimitSum:number,
    previousDayCashOnHandSum:number,
    retentionAndCashOnHandDiff:number,
    region:string,
    submitDate:string,

}


export interface BankSummary {

    retentionLimitSum:number,
    previousDayCashOnHandSum:number,

    submitDate:string,

}
