# Components

## Base classes
### _ComponentBase
| Extends        |
|----------------|
| *none*             |

| Function Name | Valid Inputs                                              | Outputs     |
|---------------|-----------------------------------------------------------|-------------|
| constructor() | *none*                                                    | *none*      |

### IBooleanState
| Function Name | Valid Inputs                                              | Outputs     |
|---------------|-----------------------------------------------------------|-------------|
| constructor() | *none*                                                        | *none*  |
| setState()    | "yes", "no", "true", "false", true, false, 1, 0, "1", "0" | *none*      |
| getState()    | *none*                                                    | true, false |

## Input devices
### Switch
| Extends        |
|----------------|
| _ComponentBase |
| IBooleanState  |

| Function Name | Valid Inputs                                              | Outputs     |
|---------------|-----------------------------------------------------------|-------------|
| constructor() | *none*                                                    | *none*      |

## Output devices
### Outlet
| Extends        |
|----------------|
| _ComponentBase |
| IBooleanState  |

| Function Name | Valid Inputs                                              | Outputs     |
|---------------|-----------------------------------------------------------|-------------|
| constructor() | *none*                                                    | *none*      |