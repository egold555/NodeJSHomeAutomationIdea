# Device Registry Service

## Usage

All responses will have the form

```json
{
    "status": "success",
    "data": "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```
<table>
<tr><th>Type</td><th>Description</th></tr>
<tr><td>success</td><td>All went well, and (usually) some data was returned.</td>
<tr><td>fail</td><td>There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied</td>
<tr><td>error</td><td>An error occurred in processing the request, i.e. an exception was thrown</td>
</table>

Subsequent response definitions will only detail the expected value of the `data field`

### List all devices

**Definition**

`GET /devices`

**Response**

- `200 OK` on success

```json
[
    {
        "identifier": "floor-lamp",
        "name": "Floor Lamp",
        "device_type": "switch",
        "ip": "192.1.68.0.2"
    },
    {
        "identifier": "samsung-tv",
        "name": "Living Room TV",
        "device_type": "tv",
        "ip": "192.168.0.9"
    }
]
```

### Registering a new device

**Definition**

`POST /devices`

**Arguments**

- `"identifier":string` a globally unique identifier for this device
- `"name":string` a friendly name for this device
- `"device_type":string` the type of the device as understood by the client
- `"ip":string` the IP address of the device's controller

If a device with the given identifier already exists, the existing device will be overwritten.

**Response**

- `201 Created` on success

```json
{
    "identifier": "floor-lamp",
    "name": "Floor Lamp",
    "device_type": "switch",
    "ip": "192.168.0.2"
}
```

## Lookup device details

`GET /device/<identifier>`

**Response**

- `404 Not Found` if the device does not exist
- `200 OK` on success

```json
{
    "identifier": "floor-lamp",
    "name": "Floor Lamp",
    "device_type": "switch",
    "ip": "192.168.0.2"
}
```

## Delete a device

**Definition**

`DELETE /devices/<identifier>`

**Response**

- `404 Not Found` if the device does not exist
- `204 success` on success