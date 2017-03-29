# Airtame stylelint configuration

[![Build Status](https://img.shields.io/travis/airtame/stylelint-config-airtame.svg)](https://travis-ci.org/airtame/stylelint-config-airtame) [![npm version](https://badge.fury.io/js/stylelint-config-airtame.svg)](https://www.npmjs.com/package/stylelint-config-airtame)

## Usage

Install as a development dependency to your project

```bash
$ yarn add --dev stylelint-config-airtame
```
or

```bash
$ npm install --save-dev stylelint-config-airtame
```

Then, on your `stylelint` configuration file

```json
{
  "extends": "stylelint-config-airtame"
}
```

## Rules

#### block-closing-brace-newline-after

Declare all blocks in a new line

```scss
// bad
a { color: pink; }b { color: red; }

a { color: pink;
} b { color: red; }

// good
a { color: pink; }
b { color: red; }
```


#### block-closing-brace-newline-before

All blocks must be closed in a new line

```scss
// bad
a { color: pink;}

// good
a {
  color: pink;
}
```


#### block-no-empty

No blocks should be declared and be left empty

```scss
// bad
a { }
```


#### block-opening-brace-newline-after

Rule declarations should be in a new line after the opening curly bracket

```scss
// bad
a { color: red; }

// good
a {
  color: red;
}
```


#### color-hex-length

When using hex colors, the full hex code should be used to define it

```scss
// bad
body {
  background: #000;
}

// good
body {
  background: #000000;
}
```


#### color-named

Named colors should never be used.

```scss
// bad
body {
  background: black;
}

// good
body {
  background: #000000;
  color: rgb(255, 255, 255);
}

p {
  background: rgba(255, 0, 0, .5);
  color: $grey; // assuming $grey was declared previously
}
```



#### color-no-invalid-hex

Ensures all hex values used are valid

```scss
// bad
body {
  background: #y3;
}
```


#### declaration-block-no-shorthand-property-overrides

Do not override a rule with a higher scoped rule. This prevents undesired results

```scss
// bad
a {
  padding-left: 10px;
  padding: 20px; // this overrides the previous rule
}

// good
a {
  padding: 10px; // first global padding
  padding-left: 20px; // then specific padding
}
```


#### declaration-block-semicolon-newline-after

Each rule should appear in a new line. Also, make sure no trailing spaces are left after a semicolon

```scss
// bad
a {
  padding: 10px; padding-left: 20px;
}

p {
  padding: 15px;•••
}

// good
a {
  padding: 10px;
  padding-left: 20px;
}

p {
  padding: 15px;
}
```


#### declaration-block-trailing-semicolon

All rules should end with a semicolon.

```scss
// bad
a {
  padding: 10px
}

// good
a {
  padding: 10px;
}
```


#### declaration-colon-space-before

Never add a space before a rule declaration's colon

```scss
// bad
body {
  background : red;
}

// good
body {
  background: rgb(255, 0, 0);
}
```




#### declaration-colon-space-after

Always leave a space after a declaration's colon

```scss
// bad
body {
  background:red;
}

// good
body {
  background: rgb(255, 0, 0);
}
```


#### declaration-no-important

Never use the `!important` tag. This usually means you're not targeting your CSS properly

```scss
// VERY BAD
a {
  background: #000000 !important;
}

// good - cascade your elements properly
.description p a {
  background: #000000;
}
```


#### indentation

Use 2 spaces for indentation

```scss
// bad
a {
    background: blue;
    color: white;

    &:hover {
        background: white;
        color: blue;
    }
}

// good
a {
  background: #FF00FF;
  color: #FFFFFF;

  &:hover {
    background: #FFFFFF;
    color: #FF00FF;
  }
}
```


#### max-nesting-depth

When using SCSS, do not nest more than 3 times in depth.

```scss
// bad
body {
  // some more rules
  div {
    // some more rules
    p {
      // some more rules
      a {
        color: red;
      }
    }
  }
}

// good - provide good classes to easily cascade your rules
body {
  // some more rules
  .my-class {
    // some more rules
    p {
      // some more rules
    }

    a {
      color: red;
    }
  }
}
```


#### max-empty-lines

Do not leave more than 1 empty line between your rules and declarations

```scss
// bad

a {
  // some rules here
}



b {
  // some more rules here
}
```
#### number-leading-zero

Do not use a leading `0` for decimal values

```scss
// bad
div {
  opacity: 0.5;
  transition: opacity 0.5s;
}

// good
div {
  opacity: .5;
  transition: opacity .5s;
}
```


#### number-no-trailing-zeros

Do not add trailing zeros for decimal values either

```scss
// bad
div {
  opacity: .5000;
  transition: opacity 0.50s;
  top: 1.0100px;
}

// good
div {
  opacity: .5;
  transition: opacity .5s;
  top: 1.01px;
}
```


#### rule-empty-line-before

Always add an empty line before new rules

```scss
// bad
a {} b {}

// bad
a {}
b {}

// good
a {}

b {}
```


#### [scss/at-mixin-argumentless-call-parentheses](https://github.com/kristerkari/stylelint-scss)

Always use parenthesis when using a mixin, even if it doesn't take any parameters

> Why? Consistency and easier code reading;

```scss
// bad
div {
  @include my-mixin-name;
}

// good
div {
  @include my-mixin-name();
}
```


#### selector-combinator-space-after

When using combinators to add specificity to your selectors, add a space after each of them.

```scss
// bad
a>b+c~de {
  color: #000000;
}

// good
a > b + c ~ d e {
  color: #000000;
}
```


#### selector-combinator-space-before

Similarly, always add a space before the combinators

```scss
// bad
a>b+c~de {
  color: #000000;
}

// good
a > b + c ~ d e {
  color: #000000;
}
```


#### selector-list-comma-newline-after

When applying the same rule to multiple selectors, write each selector in a separate line for readability purposes.

```scss
// bad
.my-first-class, .my-second-class {
  // your rules here
}

// good
.my-first-selector,
.my-second-selector {
  // your rules here
}
```


#### selector-no-id

Never use ids to style your elements. Use classes instead and leave ids for markup behavior

```scss
// bad
#my-selector {
  // styles
}

// good
.my-semantinc-class-name {
  // styles
}
```


#### selector-type-case

Use lower case and dashes for your class name selector

```scss
// bad
.MyClassName {

}

// good
.my-class-name {

}
```


#### string-quotes

When wrapping a value in quotes, use single quotes

```scss
// bad
div:before {
  content: "some string";
}

// good
div:before {
  content: 'some string';
}
```


#### value-list-comma-space-after

When writing a list, leave a space after each comma

```scss
// bad
a {
  background-size: 0,0;
}

// good
a {
  background-size: 0, 0;
}
```
