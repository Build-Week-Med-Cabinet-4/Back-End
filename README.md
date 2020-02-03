# Back-End Documentation

Under Construction!

## Things We, The Back-End, Need To Do

- [ ] Find out -EXACTLY- what recommendations are. What they contain and belong to, etc. 
- [ ] Find out what responses are as well. Relations and stuff.
- [ ] Get It Hosted (oh boy)


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

API