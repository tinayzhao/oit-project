// More content in config.ts
const throwIfNot = <T, K extends keyof T>(obj: Partial<T>, prop: K, msg?: string): T[K] => {
    if(obj[prop] === undefined || obj[prop] === null){
      throw new Error(msg || `Environment is missing variable ${prop}`)
    }else {
      return obj[prop] as T[K]
    }
  }
  // Validate that we have our expected ENV variables defined!
  ['REACT_APP_TICKETMASTER_API_KEY', 'REACT_APP_SPOONACULAR_API_KEY'].forEach(v => {
    throwIfNot(process.env, v)
  })
  
  export interface IProcessEnv {
    REACT_APP_SPOONACULAR_API_KEY: string
    REACT_APP_TICKETMASTER_API_KEY: string
  }
  
  declare global {
    namespace NodeJS {
      interface ProcessEnv extends IProcessEnv { }
    }
  }