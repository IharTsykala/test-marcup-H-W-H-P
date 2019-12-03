const form = document.querySelector("form")
const inputs = form.querySelectorAll("input")
const button = form.querySelector("button")

const widthScreen = () => {
  const w = window
  const d = document
  const ee = d.documentElement
  const g = d.getElementsByTagName("body")[0]
  const x = w.innerWidth || ee.clientWidth || g.clientWidth
  return x
}

const handlerSubmit = e => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].required = "false"
    inputs[i].style.borderColor = ""
    if (inputs[i].value === "") {
      if (
        widthScreen() >= "850" &&
        inputs[i].placeholder.indexOf("Вы забыли ввести свои данные!") === -1
      ) {
        inputs[i].placeholder = `${inputs[i].placeholder}:
        Вы забыли ввести свои данные!`
      }
      inputs[i].required = "true"
      inputs[i].style.borderColor = "red"
      e.preventDefault()
    }
  }
}

button.addEventListener("click", e => {
  handlerSubmit(e)
})

// copypasta code from http://jsfiddle.net/2TUFF/
window.onload = function() {
  $(document).ready(function() {
    animateDiv()
  })

  function makeNewPosition($container) {
    $container = $container || $(window)
    var h = $container.height() - 50
    var w = $container.width() - 50

    var nh = Math.floor(Math.random() * h)
    var nw = Math.floor(Math.random() * w)

    return [nh, nw]
  }

  function animateDiv() {
    var $appleFooterBody = $(".apple-footer-body")
    var newqAppleFooterBody = makeNewPosition($appleFooterBody.parent())
    var oldqAppleFooterBody = $appleFooterBody.offset()
    var speed = calcSpeed(
      [oldqAppleFooterBody.top, oldqAppleFooterBody.left],
      newqAppleFooterBody
    )

    var $berryBody = $(".berry-body")
    var newqBerryBody = makeNewPosition($berryBody.parent())
    var oldqBerryBody = $berryBody.offset()
    var speed = calcSpeed(
      [oldqBerryBody.top, oldqBerryBody.left],
      newqBerryBody
    )

    var $mainVoteStrawberry = $(".main__vote__strawberry")
    var newqMainVoteStrawberry = makeNewPosition($mainVoteStrawberry.parent())
    var oldqMainVoteStrawberry = $mainVoteStrawberry.offset()
    var speed = calcSpeed(
      [oldqMainVoteStrawberry.top, oldqMainVoteStrawberry.left],
      newqMainVoteStrawberry
    )

    $(".apple-footer-body").animate(
      {
        top: newqAppleFooterBody[0],
        left: newqAppleFooterBody[1]
      },
      speed,
      function() {
        animateDiv()
      }
    )

    $(".berry-body").animate(
      {
        top: newqBerryBody[0],
        left: newqBerryBody[1]
      },
      speed,
      function() {
        animateDiv()
      }
    )

    $(".main__vote__strawberry").animate(
      {
        top: newqMainVoteStrawberry[0],
        left: newqMainVoteStrawberry[1]
      },
      speed,
      function() {
        animateDiv()
      }
    )
  }

  function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1])
    var y = Math.abs(prev[0] - next[0])

    var greatest = x > y ? x : y

    var speedModifier = 0.1

    var speed = Math.ceil(greatest / speedModifier)

    return speed
  }
}
