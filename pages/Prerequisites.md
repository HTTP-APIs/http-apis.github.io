---
layout: page
title: Hydra Ecosystem | Hydraecosystem.org
permalink: /Prerequisites
---

# Prerequisite Knowledge

Below some information is listed, which is important to be known. If you know them already, feel free to skip this section. Here we go!

* **Semantic Web :** _It is a vision about an extension of the existing World Wide Web, which provides software programs with machine-interpretable metadata of the published information and data._ In other words, we add further data descriptors to otherwise existing content and data on the Web. As a result, computers are able to make meaningful interpretations similar to the way humans process information to achieve their goals. It can also be interperated as a solution to a problem we are currently facing with World Wide Web. The problem is that data is not readable by machine. To machine it's nothing more than a chunk of random bits. So in order to make data meaningful to machines, semantic web was introduced.

<!-- * **Linked Data :** Linked Data is one of the core pillars of the Semantic Web, also known as the Web of Data. The Semantic Web is about making links between datasets that are understandable not only to humans, but also to machines, and Linked Data provides the best practices for making these links possible. In other words, _Linked Data is a set of design principles for sharing machine-readable interlinked data on the Web_. You can find more about linked data [here](https://www.w3.org/standards/semanticweb/data).

* **RDFa :** _RDFa is an extension to HTML5 that helps you markup things like People, Places, Events, Recipes and Reviews._ Search Engines and Web Services use this markup to generate better search listings and give you better visibility on the Web, so that people can find your website more easily. RDFa is based on triplets. An eg triplet can be Amit > knows > Chris. You may find more about it [here](https://www.w3.org/RDF/) -->

* **RDF and Linked Data :** Hydra is an extension of W3C's Resource Description Framework (RDF). RDF is widely known as the technology which makes the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) possible by representing data as [Linked Data](https://en.wikipedia.org/wiki/Linked_data).
[RDF is a W3C standard](https://www.w3.org/RDF/) that allows the representation of Knowledge in specific Domain as Knowledge Graphs. Quanta of information are represented as "triples": statements that relate a subject to an object by a predicate. Triples can be stored in different formats. The format used in Hydra and hydrus is [JSON-LD](https://json-ld.org/).
For a more detailed explanation of triples, you can [read this document](http://www.hydra-cg.com/spec/latest/linked-data-fragments/#interfaces-to-linked-data).

* **JSON-LD :** _JSON-LD (JavaScript Object Notation for Linked Data), is a method of encoding Linked Data using JSON._ It was a goal to require as little effort as possible from developers to transform their existing JSON to JSON-LD. You may find more about it [here](https://en.wikipedia.org/wiki/JSON-LD). 

* **Next-Gen APIs :** Modified version of APIs (currently in use which are not understandable by computers) whose data can be interpreted by computers.

* **Hypermedia-Driven Web APIs :** A rest API that contains links, You can navigate by clicking on these links just like you do in a web browser. 

* **Shema.org :** Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, email messages, and beyond.
Schema.org vocabulary can be used with many different encodings, including RDFa, Microdata and JSON-LD. These vocabularies cover entities, relationships between entities and actions, and can easily be extended through a well-documented extension model. Over 10 million sites use Schema.org to markup their web pages and email messages. Many applications from Google, Microsoft, Pinterest, Yandex and others already use these vocabularies to power rich, extensible experiences.

**Note :** Hydra and Schema.org both provides vocabulary to create Next Gen Web APIs, But we use Hydra because it provides much more vocabulary as compared to schema.org.

Now that you have some basic knowledge about terms shown above, You can move ahead to <a href="/Hydra">next</a> section