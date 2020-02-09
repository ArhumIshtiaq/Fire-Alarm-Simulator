var s, h,
valassign = function() {
  s = Math.round(Math.random()),
  h = Math.round(Math.random())
  if (s) {
    if (h) {
    return true
  } else if (!(h)) {
    alert("Smoke Alert!")
  } else {
    return false
  }
}
  else if (h) {
    if (!(s)) {
      alert("High Temperature Warning")
    }
    return false
  }
}

if (valassign()) {
  var alert1 = confirm("Fire Alert!")
}
 else {
  v = "House is fine"
}

console.log(s + "/" + h)