"""白色語語根生成器 (sifarU yUsin ru dEku kekurIa)."""
from sifaru_yusin.deku import DekuRules
import typing as t

console: t.Any = 0  # __:skip
document: t.Any = 0  # __:skip
window: t.Any = 0  # __:skip

MAX_DEKUGA_LENGTH: int = 20

state: t.Dict[str, t.Any] = {"dEku_rules": DekuRules()}


class CaptureConsoleError:
    """Capture console errors.

    This is useful for ill-mannerd modules which dosen't throw errors and only output it to console.
    """

    def __init__(self):
        """Init."""
        self.element = document.getElementById("dEku_rules__error")
        self.original = console.error
        self.reported_errors = []

    def __enter__(self):
        """Enter to a with."""
        console.error = self.__draw_error

    def __exit__(self):
        """Exit from a with."""
        console.error = self.original
        if len(self.reported_errors) == 0:

            def clear_error(now):
                self.element.textContent = ""

            window.requestAnimationFrame(clear_error)

    def __draw_error(self, error):
        self.original(error)
        if len(self.reported_errors) == 0:

            def draw_error(now):
                self.element.textContent = str(error)

        else:

            def draw_error(now):
                self.element.textContent += "\n{}".format(str(error))

        self.reported_errors.append(error)
        window.requestAnimationFrame(draw_error)


def append_new_deku(list_element, new_item_element):
    """Append a new dEku to dEkuga."""
    if list_element.childElementCount >= MAX_DEKUGA_LENGTH:
        for i in range(19, list_element.childElementCount):
            list_element.removeChild(list_element.children[i])
    if list_element.hasChildNodes():
        list_element.insertBefore(new_item_element, list_element.firstChild)
    else:
        list_element.appendChild(new_item_element)


def on_change_deku_rules_textarea(event):
    """Handle to change the dEku rules textarea value."""
    deku_rules_str = document.getElementById("dEku_rules__textarea").value
    deku_rules: DekuRules = state["dEku_rules"]
    if deku_rules.rules != deku_rules_str:
        with CaptureConsoleError():
            deku_rules.set_rules(deku_rules_str)


def on_click_kekure_deku(event):
    """Handle to click the kekurE dEku button."""
    deku_rules_str = document.getElementById("dEku_rules__textarea").value
    deku_rules: DekuRules = state["dEku_rules"]
    if deku_rules.rules != deku_rules_str:
        with CaptureConsoleError():
            deku_rules.set_rules(deku_rules_str)
    new_item_element = document.createElement("li")
    new_item_element.textContent = deku_rules.kekure()
    list_element = document.getElementById("dEkuga")
    window.requestAnimationFrame(
        lambda now: append_new_deku(list_element, new_item_element)
    )


def on_dom_content_loaded(event):
    """Handle the event for the DOM content loaded."""
    document.getElementById("dEku_rules").addEventListener(
        "reset", on_change_deku_rules_textarea
    )
    deku_rules_textarea = document.getElementById("dEku_rules__textarea")
    deku_rules_textarea.defaultValue = state["dEku_rules"].rules
    deku_rules_textarea.addEventListener("keyup", on_change_deku_rules_textarea)
    document.getElementById("kekurE_dEku").addEventListener(
        "click", on_click_kekure_deku
    )

    def kekuria_on_load():
        for i in range(0, MAX_DEKUGA_LENGTH):
            on_click_kekure_deku(None)

    window.setTimeout(kekuria_on_load, 0)


if __name__ == "__main__":
    window.addEventListener("DOMContentLoaded", on_dom_content_loaded)
