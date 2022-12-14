
class Mojo {
  static onPageLoad(callback) {
    window.addEventListener('DOMContentLoaded', callback)
  }

  static onClick(selector, callback) {
    const element = document.querySelector(selector)
    element?.addEventListener('click', callback)
  }
}

