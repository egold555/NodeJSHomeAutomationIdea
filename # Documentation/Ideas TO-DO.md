# To do
☑ Basic Express server

Device Registry
  - ☑ Markdown Document
  - ☑ Reading JSON for devices
  - ☑ GET /devices | echo device
  - ☐ POST /devices | add new device
  - ☑ GET /device/identifier | Echo out properties
  - ☐ DELETE /device/identifier | Delete device and save JSON
  
Components
  - Base
    - ☑ _ComponentBase
    - ☑ IBooleanState (true or false state)
    - ☐ IDimmable (Storing 0-1 or 0-100 or 0-255 not sure yet, bright ness value)
    - ☐ IColor || IRGB || IHSV (Storing colors)
    - ☐ IHTTPResponce || IMesage || IResponce (For sending correct json to devices, has a getMessage() function that returns the json)
    - ☐ IEvent (onEvent function, useful for motion sensors, light switches, anything humans control)
    
  - Switch
    - Basic Switch
        - ☑ States
        - ☐ Events
        - ☐ Make HTTP Request
        
    - Dimmer Switch
        - ☐ States
        - ☐ Events
        - ☐ Make HTTP Request

  - ☐ Outlet
    - ☑ States
    - ☐ Make HTTP Request