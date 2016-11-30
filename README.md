# generator-blue
Yeoman generator for scaffolding with [Blue](https://github.com/Blocklevel/blue)

### Installation
First install [Yeoman](http://yeoman.io)

```bash
$ npm install -g yeoman
```

Then you can install the generator

```bash
$ npm install -g generator-blue
```

### Usage

```bash
$ yo blue
```

#### Sitemap
To create a sitempa with `generator-blue` you need to create a `.yo-rc.json` file which should be structured like this

```json
{
  "generator-blue": {
    "sitemap": {
      "page": {
        "home": {
          "basic": false
        },
        "contact": {
          "basic": true
        }
      },
      "component": {
        "header": {
          "basic": false
        }
      },
      "store": {
        "auth": {
          "events": "set, get, remove, get by id, remove by id"
        }
      }
    }
  }
}
```