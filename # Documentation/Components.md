# Format
| Key             | What it means                                |
|-----------------|----------------------------------------------|
| *none*          | Nothing is returned / no function parameters |
| constructor()   | class constructor                            |
| *constructor()* | super class constructor                      |
| function()      | class function                               |
| *function()*    | super class function                         |

# Components

## Base classes
### _ComponentBase
| Extends        |
|----------------|
| *none*         |

| Function Name | Valid Inputs                                              | Outputs     |
|---------------|-----------------------------------------------------------|-------------|
| constructor() | *none*                                                    | *none*      |

### IBooleanState
| Function Name   | Valid Inputs                                              | Outputs     |
|-----------------|-----------------------------------------------------------|-------------|
| *constructor()* | *none*                                                    | *none*      |
| setState()      | "yes", "no", "true", "false", true, false, 1, 0, "1", "0" | *none*      |
| getState()      | *none*                                                    | true, false |

## Input devices
### Switch
| Extends        |
|----------------|
| _ComponentBase |
| IBooleanState  |

| Function Name   | Valid Inputs                                              | Outputs     |
|-----------------|-----------------------------------------------------------|-------------|
| *constructor()* | *none*                                                    | *none*      |
| *setState()*    | "yes", "no", "true", "false", true, false, 1, 0, "1", "0" | *none*      |
| *getState()*    | *none*                                                    | true, false |

## Output devices
### Outlet
| Extends        |
|----------------|
| _ComponentBase |
| IBooleanState  |

| Function Name   | Valid Inputs                                              | Outputs     |
|-----------------|-----------------------------------------------------------|-------------|
| *constructor()* | *none*                                                    | *none*      |
| *setState()*    | "yes", "no", "true", "false", true, false, 1, 0, "1", "0" | *none*      |
| *getState()*    | *none*                                                    | true, false |