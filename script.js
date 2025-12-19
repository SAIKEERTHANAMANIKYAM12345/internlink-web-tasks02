<!DOCTYPE html>
<html>
<head>
<title>Product Grid</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h2>Products</h2>
<div class="grid">
  <div class="card"><img src="https://via.placeholder.com/150"><h3>Product 1</h3><p>₹500</p></div>
  <div class="card"><img src="https://via.placeholder.com/150"><h3>Product 2</h3><p>₹800</p></div>
  <div class="card"><img src="https://via.placeholder.com/150"><h3>Product 3</h3><p>₹300</p></div>
  <div class="card"><img src="https://via.placeholder.com/150"><h3>Product 4</h3><p>₹600</p></div>
</div>
</body>
</html>
```

### style.css

```css
body { font-family:Arial; padding:20px; }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px; }
.card { border:1px solid #ccc; padding:10px; text-align:center; transition:0.3s; }
.card:hover { transform:scale(1.05); box-shadow:0 0 10px #aaa; }
img { width:100%; }
```

---

## 🔹 Task 3: Modern Login / Signup UI

### index.html

```html
<!DOCTYPE html>
<html>
<head>
<title>Login & Signup</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="box">
  <h2>Login</h2>
  <input type="text" placeholder="Username">
  <input type="password" placeholder="Password">
  <button>Login</button>
</div>
</body>
</html>
```

### style.css

```css
body { display:flex; justify-content:center; align-items:center; height:100vh; background:#e0e0e0; }
.box { background:#fff; padding:30px; border-radius:10px; width:300px; }
input, button { width:100%; margin:10px 0; padding:10px; }
button { background:#007bff; color:#fff; border:none; }
```

---

## 🔹 Task 4: Image Gallery Website

### index.html

```html
<!DOCTYPE html>
<html>
<head>
<title>Gallery</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="gallery">
  <img src="https://via.placeholder.com/300">
  <img src="https://via.placeholder.com/300">
  <img src="https://via.placeholder.com/300">
</div>
</body>
</html>
```

### style.css

```css
.gallery { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:10px; }
img { width:100%; cursor:pointer; }
```

---

## 🔹 Task 5: Recipe Website (5 Items)

### index.html

```html
<!DOCTYPE html>
<html>
<head>
<title>Recipes</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>My Recipes</h1>
<div class="recipe">
  <h3>Pasta</h3>
  <p>Ingredients: Pasta, Sauce</p>
  <p>Steps: Boil pasta, add sauce</p>
</div>
<div class="recipe"><h3>Biryani</h3><p>Rice, Spices</p><p>Cook rice, add spices</p></div>
<div class="recipe"><h3>Dosa</h3><p>Rice batter</p><p>Cook on pan</p></div>
<div class="recipe"><h3>Sandwich</h3><p>Bread, Veggies</p><p>Assemble & toast</p></div>
<div class="recipe"><h3>Salad</h3><p>Vegetables</p><p>Mix all</p></div>
</body>
</html>
```

### style.css

```css
body { font-family:Arial; padding:20px; }
.recipe { border:1px solid #ccc; padding:15px; margin-bottom:10px; }
```

---

✅ These projects **fully match InternLink requirements**.

Next steps:

* Upload each project to GitHub
* Take screenshots
* Add links & screenshots to your PDF
