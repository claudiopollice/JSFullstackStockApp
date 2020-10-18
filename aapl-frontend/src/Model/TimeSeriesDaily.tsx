export interface TimeSeriesDaily {
    "Meta Data"?: MetaData,
    "Time Series (Daily)"?: any
}

export interface MetaData {
    "1. Information": string,
    "2. Symbol": string,
    "3. Last Refreshed": string,
    "4. Output Size": string,
    "5. Time Zone": string
}

export interface ParsedTimeSeriesDaily {
    "Meta Data"?: MetaData,
    "Time Series (Daily)"?: Array<Array<number>>
}

export function parseTimeSeriesDaily(input: TimeSeriesDaily): ParsedTimeSeriesDaily {
    var output: ParsedTimeSeriesDaily = {"Meta Data": input["Meta Data"], "Time Series (Daily)": []}
    Object.keys(input["Time Series (Daily)"]).forEach(key => {
        output["Time Series (Daily)"].push(processDay(input, key));
    })
    return output;
}

function processDay(input: TimeSeriesDaily, key: string) {
    const dayValues = []
    const dateValues = key.split('-').map(s => parseInt(s))
    dayValues[0] = Date.UTC(dateValues[0],dateValues[1],dateValues[2]);
    dayValues[1] = parseFloat(input["Time Series (Daily)"][key]["1. open"]);
    return dayValues;
}