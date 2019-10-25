---
layout: page
title: Hydra Ecosystem | Hydraecosystem.org
permalink: /Hydra
---

# What is Hydra?

As per the <a href="https://www.hydra-cg.com/spec/latest/core/">draft</a> proposed here, Hydra describes a lightweight vocabulary which aids in creation of hyper-media driven APIs. Vocabulary described by Hydra is based on linked data which helps machines to understand semantics behind the data they send or receive.

# What's the big deal?

Hydra is a set of vocabularies that can be used to document REST APIs so that users don't need to go through the additional API documentation (which is sometimes too complex) in order to understand working of the API. You might be wondering that “what’s so special about it?”, A direct answer is that it helps us document APIs such that they are readable by machines. One of the biggest problems faced by the programmers right now is that when they use APIs which are not readable by machines, we generally tend to hardcode API structure/links on client side in order to display data we received via response from server. So in case you are using an API (suppose weather API) in your application, and there is a change in API URL/Structure for some unknown reason. 

```
# API (Old)
{
  name: "ABC School",
  address: "Abc Street 10/6, City, Country",
  contact: {
    email: "abc@schooldomain.com",
    phone: "+1-202-555-0198"
  }
}

# API (updated)
{
  name: "Laura",
  roll_no: 15,
  contact: {
    email: "jkl@domain.com",
    phone: "+1-555-019-8202"
  }
}
```

You would need to make changes every where you used that API/link. Which might not seem to be any major problem when you  are mainaining a small codebase and you have used API at very few places, but when codebase is large and you have used API at lots of places then updating links at every place can be a severe headache for the developer. And should you forgot to update even one API/link, your app would definitely crash and result in huge loses of both time and resources. I am sure nobody want's that to happen that's where hydra comes handy and playes very important role. By using hydra you can create an API documentation which can be understood by machines. So what does it really mean? It means that the task that were supposed to be done at developers end can now be automated. Which is essentially a lifesaver for any developer. Developers can create generic clients which are completely independent of server's API structure/link (provided that Server is using hydra documented API). Functionality of these generic clients can be manipulated by making changes in API documentaion and that too without crashing the program (Atleast I hope so ;)). One thing to note is that it's not only a livesaver for developer but also for any company, which can save lots of money by using this approach. 


Okay So I think by now you must have got a broad idea of Hydra and Documentation frameworks in general. Now let's move forth to next section and study hydra by some <a href="Example">Examples</a>


