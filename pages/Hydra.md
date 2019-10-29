---
layout: page
title: Hydra Ecosystem | Hydraecosystem.org
permalink: /Hydra
---

# What is Hydra?

As per the <a href="https://www.hydra-cg.com/spec/latest/core/">draft</a> proposed here, Hydra describes a lightweight vocabulary which aids in creation of hyper-media driven APIs. Vocabulary described by Hydra is based on linked data which helps machines to understand semantics behind the data they send or receive.

# What's the big deal?

Hydra is a set of vocabularies that can be used to document REST APIs so that users don't need to go through the additional API documentation (which is sometimes too complex) to understand the working of the API. Hydra helps us document APIs in a way that they are readable by machines. One of the biggest problems faced by the programmers right now is that when they use APIs which are not readable by machines, they generally need to hardcode API structure on client-side to display data we received via a response from the server. Suppose you are using a weather API in your application. And it comes to your notice that there is a change in API Structure for some unknown reason (possible reasons can include scaling, etc). Examples shown below may make this even clearer. 

```
# API (Old)

URL: www.wtrresults.in/Delhi

{
  temperature: "20C",
  humidity: "10%",
}


# API (API structure changed)

URL: www.wtrresults.in/Delhi

{
  basic: {
    temperature: "20C",
    humidity: "10%,
  },
  misc: {
    wind_speed: "4kmph",
    rain: "20%"
  }
}
```

So in order to prevent your application from crashing, you would need to make changes everywhere you used that API. This might not seem to be a major problem when you are maintaining a small codebase and you have used the API at very few places, but when the codebase is large and you have used API at lots of places then updating at every place can be a severe headache for the developer. And should you forgot to update even one API, your app would crash and result in huge loses of both time and resources. I am sure nobody wants that to happen that's where hydra comes handy and plays a very important role. By using hydra you can create API documentation which can be understood by machines. So what does it mean? It means that the task that was supposed to be done at the developer's end can now be automated. Which is essentially a lifesaver for any developer. Developers can create generic clients which are completely independent of the server's API structure (provided that Server is using hydra documented API). The functionality of these generic clients can be manipulated by making changes in the API documentation and that too without crashing the program. One thing to note is that it's not only a lifesaver for the developer but also for any company, which can save lots of money by using this approach.

Okay, so this was a brief introduction of Hydra. Now let's move forth to next section and study hydra by some <a href="Example">Examples</a>


