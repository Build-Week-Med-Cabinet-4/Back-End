# Back-End Documentation

Under Construction!

## Things We, The Back-End, Need To Do

- [ ] Find out -EXACTLY- what recommendations are. What they contain and belong to, etc. 
  - A recommendation is: 
     ```
        {
            strain: "?"
        }
     ```
- [ ] Find out what responses are as well. Relations and stuff.
  - A response is: 
    ```
    {
        
    }
    ```
- [ ] Get It Hosted (oh boy)
  - API is hosted at `nowhere at the moment, go away`

## Endpoints: 

### `POST` to `/api/auth/register`:

API request data shape FROM front-end: 

```
{
    username: "your-username-here",
    password: "super-secret-thing-SHHHhHHHSSh"
}
```

If successful, the API will respond with: 

```
{
    id: 1298347, //This can really be any integer, but it increments.
    username: "some-stringy-thing"   
}
```

### `POST` to `/api/auth/login`:

What the front-end should be sending to API: 

```
{
    username: "zoinks",
    password: "scoob"
}
```

What the API will respond with on login success: 

```
{
    token: "secret cow says moo", //This will be a string of garbledygook. Send this in your authentication header whenever you want to access something restricted as the front-end.
    message: "Welcome, zoinks!"
}
```