Hooks.once('ready', () => {
    if (!game.user.isGM) return
    ui.notifications.error(
        `The module <strong>PF2e Automatic Rune Progression</strong> is not compatible with the latest versions of the <strong>Pathfinder Second Edition</strong> system, if you still want to use this variant, you can find its replacement in the module <strong>PF2e Toolbelt</strong>.`,
        { permanent: true }
    )
})
