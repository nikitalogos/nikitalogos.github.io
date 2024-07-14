```scss

<style lang="scss">
$site-defaults-color: #c8c3bc;

// 3.
$quote-border-color: #666;
// 4.
$code-border-color: #666;
$code-bg-color: rgba(255, 255, 255, 0.05);
// 6.
$highlight-color: $site-defaults-color;

$inline-code-color: rgb(3, 218, 197); // = #03dac5
$inline-code-bg-color: rgba(3, 218, 197, 0.1);
// 9.
$table-border-color: #666;
$table-stripe-color: rgba(255, 255, 255, 0.07);
// 10
$hline-color: $site-defaults-color;
//
$details-border-color: #666;

.md-wrapper {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~1. headers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  @for $i from 1 through 6 {
    $sel: "h" + $i;
    #{$sel} {
      // nothing here
    }
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2. text blocks~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~3. quotes~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  blockquote {
    margin: 15px 0;
    padding: 0 20px;

    border: 1px solid $quote-border-color;
    border-left: 5px solid $quote-border-color;
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~4. code blocks~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  code {
    font-family: Raleway;
  }
  pre {
    padding: 10px;
    margin-bottom: 10px;
    display: block;

    border: 1px solid $code-border-color;
    border-radius: 4px;
    background-color: $code-bg-color;

    overflow-x: auto;

    code {
      white-space: pre;
      word-break: normal;
      word-spacing: normal;
      word-wrap: normal;
    }
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~5. lists~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ul {
    list-style-type: circle;
  }
  ol,
  ul {
    padding-inline-start: 25px;
  }
  li {
    padding: 3px 0;
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~6. text-decoration~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  mark {
    padding: 2px;
    background-color: $highlight-color;
  }
  code:not([class]) {
    padding: 2px 4px;
    font-size: 90%;
    color: $inline-code-color;
    background-color: $inline-code-bg-color;
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~7. links~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  @mixin link {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }
  a {
    @include link;
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~8. images~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  img {
    max-width: 100%;
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~9. tables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  table {
    width: 100%;
    max-width: 100%;
    margin: 15px 0;

    border-collapse: collapse;
    border-spacing: 0;

    text-align: left;

    display: block;
    overflow-x: auto;

    th,
    td {
      padding: 10px;
      border: 1px solid $table-border-color;
    }
    thead tr th {
      border-bottom: 2px solid $table-border-color;
    }

    tbody tr:nth-child(odd) {
      td,
      th {
        background-color: $table-stripe-color;
      }
    }
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~10.2 hline~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  hr {
    border: 0;
    height: 1px;
    width: 100%;

    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      $hline-color,
      rgba(0, 0, 0, 0)
    );
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~spoilers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  @mixin user_select_none {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  details {
    background-color: rgba(255, 255, 255, 0.02);
    padding: 10px;
    border: dotted 1px $details-border-color;

    summary {
      @include link;
      @include user_select_none;
    }
  }
}
</style>

```
