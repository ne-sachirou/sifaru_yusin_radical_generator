"""白色語語根生成器 (sifarU yUsin ru dEku kekurIa)."""
from sifaru_yusin.deku import kekure
import typing as t

document: t.Any = 0  # __:skip
window: t.Any = 0  # __:skip

MAX_DEKUGA_LENGTH = 20


def append_new_deku(list_element, new_item_element):
    """Append a new dEku to dEkuga."""
    if list_element.childElementCount >= MAX_DEKUGA_LENGTH:
        for i in range(19, list_element.childElementCount):
            list_element.removeChild(list_element.children[i])
    if list_element.hasChildNodes():
        list_element.insertBefore(new_item_element, list_element.firstChild)
    else:
        list_element.appendChild(new_item_element)


def on_click_kekure_deku(event):
    """Handle to click the kekurE dEku button."""
    new_item_element = document.createElement("li")
    new_item_element.textContent = kekure()
    list_element = document.getElementById("dEkuga")
    window.requestAnimationFrame(
        lambda now: append_new_deku(list_element, new_item_element)
    )


def on_dom_content_loaded(event):
    """Handle the event for the DOM content loaded."""
    document.getElementById("kekurE_dEku").addEventListener(
        "click", on_click_kekure_deku
    )


if __name__ == "__main__":
    window.addEventListener("DOMContentLoaded", on_dom_content_loaded)
