const appSidebarButtonTemplate = document.createElement("template");
appSidebarButtonTemplate.innerHTML = `
<style>
.mailSidebar__mailbox__button {
    width: 100%;
    padding: 0px 0px 0px 10px;
    background-color: #fff;
    border: 0px;
    border-radius: 0px 50px 50px 0px;
    font-size: 1.2rem;
}

    .mailSidebar__mailbox__button__div, .mailSidebar__mailbox__button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 30px;
    }

    .mailSidebar__mailbox__button__heading {
        padding-left: 10px;
    }

        .mailSidebar__mailbox__button active {
            background-color: #D6E2FB;
        }

        .mailSidebar__mailbox__button:hover {
            background-color: #e3e3e3;
            cursor: pointer;
        }
        
        .active {
            background-color: #D6E2FB;
        }
</style>
<button class="mailSidebar__mailbox__button">
    <div class="mailSidebar__mailbox__button__div">
        <slot name="icon"></slot>
        <h4 class="mailSidebar__mailbox__button__heading"></h4>
    </div>
    <p></p>
</button>
`;

class AppSidebarButton extends HTMLElement {
    constructor() {
        super();

        this.isSidebarActive = false;

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.append(appSidebarButtonTemplate.content.cloneNode(true));

        const text = this.getAttribute("text");
        this.shadowRoot.querySelector("h4").innerText = text;
        const unreadCount = this.getAttribute("unreadCount");
        this.shadowRoot.querySelector("p").innerText = unreadCount;

        const activeItem = this.shadowRoot.querySelector(".mailSidebar__mailbox__button");
        activeItem.addEventListener("click", () => this.handleActiveMenuItem());
    }

    disconnectedCallback() {
        console.log("Our element is removed from DOM");
        this.shadowRoot.querySelector("button").removeEventListener;
    }

    handleActiveMenuItem() {
        console.log(this.shadowRoot.querySelector(".mailSidebar__mailbox__button"));
        this.isSidebarActive = !this.isSidebarActive;

        const buttonActive = this.shadowRoot.querySelector(".mailSidebar__mailbox__button");
        console.log(this.shadowRoot.querySelector(".mailSidebar__mailbox__button"));
        if (this.isSidebarActive) {
            buttonActive.classList.add('active');
        } else {
            buttonActive.classList.remove('active');
        }
    }
}

window.customElements.define("app-sidebar-button", AppSidebarButton);