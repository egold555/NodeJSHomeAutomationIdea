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
### ComponentBase
| Extends        |
|----------------|
| *none*         |

| Function Name | Valid Inputs                                              | Outputs     |
|---------------|-----------------------------------------------------------|-------------|
| constructor() | *none*                                                    | *none*      |

### ComponentBooleanState
| Extends       |
|---------------|
| ComponentBase |

| Function Name   | Valid Inputs                                              | Outputs     |
|-----------------|-----------------------------------------------------------|-------------|
| *constructor()* | *none*                                                    | *none*      |
| setState()      | "yes", "no", "true", "false", true, false, 1, 0, "1", "0" | *none*      |
| getState()      | *none*                                                    | true, false |

### ComponentDimmable
| Extends       |
|---------------|
| ComponentBase |

| Function Name   | Valid Inputs                                              | Outputs                  |
|-----------------|-----------------------------------------------------------|--------------------------|
| constructor()   | min value, max value                                      | *none*                   |
| setValue()      | number between min and max                                | *none*                   |
| getState()      | *none*                                                    | number between min & max |

## Input / Output devices
### Device Base
| Extends        |
|----------------|
| *none*         |

| Function Name   | Valid Inputs | Outputs     |
|-----------------|--------------|-------------|
| *constructor()* | *none*       | *none*      |

## Input devices
### Switch
| Extends     |
|-------------|
| Device Base |

| Function Name   | Valid Inputs                                              | Outputs     |
|-----------------|-----------------------------------------------------------|-------------|
| *constructor()* | *none*                                                    | *none*      |
| *setState()*    | "yes", "no", "true", "false", true, false, 1, 0, "1", "0" | *none*      |
| *getState()*    | *none*                                                    | true, false |

### Dimmer Switch
| Extends    |
|------------|
| DeviceBase |

| Function Name   | Valid Inputs                                              | Outputs     |
|-----------------|-----------------------------------------------------------|-------------|
| *constructor()* | *none*                                                    | *none*      |
| *setState()*    | "yes", "no", "true", "false", true, false, 1, 0, "1", "0" | *none*      |
| *getState()*    | *none*                                                    | true, false |

## Output devices
### Outlet
| Extends    |
|------------|
| DeviceBase |

| Function Name   | Valid Inputs                                              | Outputs     |
|-----------------|-----------------------------------------------------------|-------------|
| *constructor()* | *none*                                                    | *none*      |
| *setState()*    | "yes", "no", "true", "false", true, false, 1, 0, "1", "0" | *none*      |
| *getState()*    | *none*                                                    | true, false |