# Shared module

This folder is used only for lazy loading (these components are loaded on demand)

All global components you need for your application that are used at multiple places (ex: buttons, modals, directives, pipes)

Components / pipes / directives should only be imported in components modules (home component, login componenet) not in generale modules (public module, protected module, admin module)

If this componenets are used in core components or are pages (not reusable components) they should be in the core folder not in shared
