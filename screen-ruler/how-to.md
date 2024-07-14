# Installation

1. Go to chrome web store and install the extension.
2. Click on the extensions icon in the top right corner of the browser.
3. Find the Screen Ruler extension and pin it to the toolbar.
4. Click on the Screen Ruler icon to open the ruler.
5. Enjoy!

# How to use

1. In the top right corner you will see a toolbar.
   1. Here you can find current mode indicator, hint, and buttons: help, settings, exit, collapse toolbar.
   2. You can move toolbar around the page by dragging it. You can also collapse it to save space.
2. Follow the hint below mode indicator to learn how to use the ruler or continue reading this guide.
3. Modes
   1. Initial
      1. Click anywhere on the page to set first point. You will enter the Input mode.
   2. Input
      1. Click anywhere on the page to set second point.
      2. Continue adding points as you need.
      3. When you are done, press Escape to proceed to edit mode.
   3. Edit
      1. You can drag lines and points to adjust them.
      2. You can copy measure results to clipboard by clicking the tooltip with the value.
      3. In this mode you can interact with browser (click buttons, etc.) without losing your measurements. You can leave them as an overlay with guides.
      4. To clear all measurements, press Escape. You will get back to the Initial mode.
   4. Initial (again)
      1. You can press Escape to exit the ruler.
      2. Or you can start measuring again!

# Hotkey

You can use hotkey to toggle the ruler on and off.
It's `Option + Shift + R` on Mac and `Alt + Shift + R` on Windows.
You can't change it, but you can disable it in the settings.

# Pixel-perfect precision

In this section you will learn how to use the ruler with pixel-perfect precision.

Read time: 2 min.

## Basics

Units of measurement: pixels

What you can measure:

1. width / horizontal distance
2. height / vertical distance
3. position (x, y) from top left corner of the page
4. you can make chain of measurements

# Example

Here we have rectangle with the following CSS properties:

```css
{
  width: 6px;
  height: 5px;
  left: 3px;
  top: 4px;
}
```

![](https://logosnikita.com/screen-ruler/images/gif_1.png)

## To measure rectangle size:

1. align left edge of the first point with the left edge of the box.
2. then, align left edge of the second point with the right edge of the box.
3. measure the height accordingly.

The logic is the same as with the physical ruler.

![](https://logosnikita.com/screen-ruler/images/1.gif)

### Correct and wrong

✅ Correct: put one point inside the rectangle, another outside.

![](https://logosnikita.com/screen-ruler/images/do.png)

---

❌ Wrong: don’t put both points inside the rectangle

![](https://logosnikita.com/screen-ruler/images/dont_1.png)

---

❌ Wrong: don’t put both points outside the rectangle

![](https://logosnikita.com/screen-ruler/images/dont_2.png)

## To measure pixel position

1. position cursor at the pixel you want to measure.
   1. Ruler's lines have thickness of 1 px, so it's easy to see the exact position.
2. Position of point is equal to indices of the pixel it's located on.
   1. Indices start from 0, so x=3 means that there are 3 pixels to the left and current pixel is the 4th.

![](https://logosnikita.com/screen-ruler/images/2.gif)
