/* Sheet Config Toggle */
on("clicked:config", function() {
    getAttrs(["config_on"], function(v) {
        setAttrs({config_on: v["config_on"] !== "1" ? "1" : "0"});
    });
});

/* Sheet Mode Toggles */
const modelist = ["play","edit"];
modelist.forEach(modebutton => {
    on(`clicked:${modebutton}`, function() {
        setAttrs({mode: modebutton});
    });
});

/* Sheet Type Specific Worker Scripts */
{% if battle_units %}{% include 'mythras/battle_unit.js' %}{% endif %}
{% include 'character/character.js' %}
{% if ships %}{% include 'mythras/ship.js' %}{% endif %}
{% if vehicles == 'mythras' %}{% include 'mythras/vehicle.js' %}{% endif %}
{% if vehicles == 'frostbyte' %}{% include 'frostbyte/vehicle.js' %}{% endif %}
{% if solar_systems %}{% include 'frostbyte/solar_system.js' %}{% endif %}

