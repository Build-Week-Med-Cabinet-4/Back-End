# Back-End Documentation

Under Construction!

Note: Many endpoints in this API return an array of objects for ease-of-mapping in the front end. This is a convenience feature that might not always be available depending on how the data we want to send is structured. In the case that you should receive an object of objects, go ahead and use `Object.values(thingToConvert)` to convert it to an array of objects.

## Note 2 electric boogaloo: The `/responses` endpoints have COMPLETELY CHANGED! Be sure to read these docs thoroughly!

## Things We, The Back-End, Need To Do

- [x] Find out -EXACTLY- what recommendations are. What they contain and belong to, etc. 
  - A recommendation is: 
     ```
        {
            ??????????
        }
     ```
- [x] Find out what responses are as well. Relations and stuff.
  - A response is: 
    ```
    {
        "strain": "sham-wow"
    }
    ```
- [x] Get It Hosted (oh boy)
  - API is hosted at https://med-cabinet-4.herokuapp.com/

## Endpoints: 

### Auth

#### `POST` to `/api/auth/register`:

API request data shape FROM front-end: 

```
{
    "username": "your-username-here",
    "password": "super-secret-thing-SHHHhHHHSSh",
    "full_name": "Insert Your Seventy-Five Surnames Here",
    "email": "String@name.domain"
}
```

If successful, the API will respond with the `newly created user`: 

```
{
    "id": 1298347, //This can really be any integer, but it increments.
    "username": "your-username-here",
    "password": "super-secret-thing-SHHHhHHHSSh",
    "full_name": "Insert Your Seventy-Five Surnames Here",
    "email": "String@name.domain"
}
```

#### `POST` to `/api/auth/login`:

What the front-end should be sending to API: 

```
{
    "username": "zoinks",
    "password": "scoob"
}
```

The API will respond with a `token` on login success: 

```
{
    token: "secret cow says moo", //This will be a string of garbledygook. Send this in your authentication header whenever you want to access something restricted as the front-end.
    message: "Welcome, zoinks!"
}
```

### Responses

#### `POST` to `/api/responses/search`: 

Be sure to send a valid token in the `Authentication` header.

The API accepts an `object` of `parameters` that can be `empty` or `string` to search with: 

```
{
	"positive_effect": "euphoria",
	"negative_effect": "",
	"medical_effect": "",
	"flavor": "apple",
	"desc": ""
}
```

And returns an `object` containing the `strain`:

```
{
    "description": "1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co. The breeders claim to guard the secret genetics due to security reasons, but regardless of its genetic heritage, 1024 is a THC powerhouse with a sweet and spicy bouquet. Subtle fruit flavors mix with an herbal musk to produce uplifting sativa effects. One specific phenotype is noted for having a pungent odor that fills a room, similar to burning incense.",
    "effects": "Uplifted,Happy,Relaxed,Energetic,Creative",
    "flavor": "Spicy/Herbal,Sage,Woody",
    "id": 2,
    "name": "1024",
    "race": "sativa",
    "rating": 4
}
```

#### `GET` to `/api/responses/:id`: 

Be sure to send a valid token in the `Authentication` header.

The API accepts a `strain_id` in the `URI` and returns an `object` containing the `strain`: 

```
{
    "description": "1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co. The breeders claim to guard the secret genetics due to security reasons, but regardless of its genetic heritage, 1024 is a THC powerhouse with a sweet and spicy bouquet. Subtle fruit flavors mix with an herbal musk to produce uplifting sativa effects. One specific phenotype is noted for having a pungent odor that fills a room, similar to burning incense.",
    "effects": "Uplifted,Happy,Relaxed,Energetic,Creative",
    "flavor": "Spicy/Herbal,Sage,Woody",
    "id": 2,
    "name": "1024",
    "race": "sativa",
    "rating": 4
}
```

#### `GET` to `/api/responses/user/:id`: 

Be sure to send a valid token in the `Authentication` header.

The API accepts a `user_id` in the `URI` and returns an `array` of `object`s containing the `strain_id`s for that `user`: 

```
[
    {
        "strain_id": 421
    },
    {
        "strain_id": 68
    }
]
```

#### `POST` to `/api/responses`:

Shape you want to send to the API: 
```
{
    "strain_id": 419,
    "user_id": 1 
}
```

#### `POST` to `/api/responses/delete`:

Be sure to send a `user_id` and a `strain_id` in the body of your request.
```
{
    "strain_id": 50,
    "user_id": 51 
}
```

Basically, what you're doing is telling the API to delete the specified `strain` from the `user`'s data. But the API needs to know WHICH `user` you are referring to.

The API is going to return the `number of records deleted`:

```
{
    "deleted": 1
}
```

Same thing as above applies. If this isn't `1`, something has gone horribly wrong.


## DS Database API stuff (Front-end doesn't need to worry about this).

#### POST to `https://med-cabinet-4-api.herokuapp.com/predict`:
```
{
"positive_effect": "euphoria",
"negative_effect": "DEATH",
"medical_effect": "immortality",
"flavor": "euphoria",
"desc": "euphoria"
}
```

Response will be: 

```
{
    "description": "Cherry OG by Emerald Triangle Seeds is a hybrid cannabis strain bred by combining Cherry Thai, Afghani, and Lost Coast OG genetics. A 50/50 hybrid, Cherry OG truly brings you the best of both sativa and indica worlds as it delivers full-body euphoria alongside high-flying cerebral lucidity. While its name sets expectations of a fruity cherry aroma, this strain can sometimes express more sour and diesel-like flavors. ",
    "effects": "Euphoric,Relaxed,Happy,Uplifted,Hungry",
    "flavor": "Berry,Diesel,Sweet",
    "id": 511,
    "name": "Cherry-Og",
    "race": "hybrid",
    "rating": 4
}
```

### GET to `https://med-cabinet-4-api.herokuapp.com/search`:

```
{
    "id": 1-3018
}
```

Response is same as above.