---
layout: page
title: Hydra Ecosystem | Hydraecosystem.org
permalink: /Hydra
---

# What is Hydra?

It's basically a documentation framework based on Linked Data which provides vocabulary (similar to schema.org) which aids in the creation of Next Generation Web APIs.

# What's so unique about it?

Hydra in a nutshell is an extension of RDFa technology. As you might already know that our current web is transitioning to Semantic web. In order to acheive that we need to use RDFa based tools (which takes concepts of semantic web in regard) where ever possible. As hydra is just an extension of RDFa, you can imagine it as the closest relative of RDFa when we talk of documentation frameworks. This makes hydra nearly 100% semantic. That's the thing unique about it and also justification for _why we should use it?_. 

# Why do we even need a documentation framework?

Okay, so by now you know that _What is hydra?_ and _Why do we need it?_ But hold on for a moment. Why do we even need a documentation framework in the first place? or Why do we need semantics to be added to a already working Rest API? Okay, let's clear all the mist and try to find answers to these questions. Let's imagine a couple of simple rest APIs. First API provides information about school and second one provides information about students studying in that school. Sample responses of respective web APIs are given below. 

```
# API 1
{
  name: "ABC School",
  address: "Abc Street 10/6, City, Country",
  contact: {
    email: "abc@schooldomain.com",
    phone: "+1-202-555-0198"
  }
}

# API 2
{
  name: "Laura",
  roll_no: 15,
  contact: {
    email: "jkl@domain.com",
    phone: "+1-555-019-8202"
  }
}
```

Okay, now let's say that I give you data from any one response, Would you be able to recognize if the _name_ (you got in response) refers to school name or student name? Most probable answer would be no. We are humans so there can be a slight chance that may be we could tell the difference as all the information is in natural language. But for a computer there is no difference. Computer doesn't understand natural langauge there's no way it can find context related to that information. Till now we are able to make working web API interactions because we hardcode how to represent the output at the client side. Computer doesn't use any intelligence it just obeys set of instructions which are hardcoded by the programmer for individual responses. There is nothing wrong with these approach, but only till you handle few responses. When we are required to handle more number of responses, then hardcoding clientside would not pose to be a viable option (Large codebase poses many problems like maintenance issues, fnding bug difficulties, etc), If we are able to create some generic solution to handle all the problems at once. It would lead to a much smaller codebase, which is easy to maintain and bug tracking is also very fast. But in order to make generic solutions we need to customize APIs such that they can be understood by machines. In short we need to add context to JSON response. So that computer can recognize whether this particular _name_ key refers to school name or student name. Here JSON-LD comes to rescue and provides a very elegant solution with the help of schema.org vocabulary. JSON-LD provides `@context` key which solves the context problem. 

```
{
  @context:{...},
  name: "ABC School",
  address: "Abc Street 10/6, City, Country",
  contact: {
    email: "abc@schooldomain.com",
    phone: "+1-202-555-0198"
  }
}
```

But as mentioned in <a href="/Prerequisites">prerequisites</a> section, The range of vocabulary provded by schema.org is not enough for API development therefore we use Hydra framework. 

Okay So I think by now you must have got a broad idea of Hydra and Documentation frameworks in general. Now let's move forth to next section and study some <a href="00-Home">hydra-ecosystem basics</a>


