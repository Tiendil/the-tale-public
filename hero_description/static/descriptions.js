if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};


pgf.descriptions.RenderSystem = function(selector) {

    var widget = jQuery(selector);
    var templatesList = jQuery('.pgf-description-template-selection', widget);
    var textContainer = jQuery('.pgf-description-template', widget);

    var configuration = {};
    var currentTemplate = undefined;

    for (var templateId in pgf.descriptions.templates ) {
        templatesList.append("<option value='" + templateId + "'>" +
                             pgf.descriptions.templates[templateId].name +
                             "</option>");
    }

    function GenerateConfiguration(template) {
        var config = {};
        for (var variableId in template.variables) {
            var variable = template.variables[variableId];
            var keys = [];
            for (var key in variable) { keys.push(key); }
            var randomIndex = Math.floor(Math.random() * keys.length);
            config[variableId] = keys[randomIndex];
        }
        return config;
    }

    function UpdateText() {
        var templateId = jQuery('option:selected', templatesList).val()
        var template = pgf.descriptions.templates[templateId];

        if (currentTemplate != templateId) {
            currentTemplate = templateId;
            configuration = GenerateConfiguration(template);
        }

        var text = pgf.descriptions.RenderTemplate(template, configuration);
        textContainer.html(text);

        jQuery(".pgf-change-variable-link").click(function(e){
            var target  = jQuery(e.currentTarget);
            configuration[target.data("variable")] = target.data("value");
            UpdateText();
        });
    }

    templatesList.change(function(e) {
        UpdateText()
    });

    UpdateText();

};

pgf.descriptions.RenderTemplate = function(template, configuration) {
    var text = template.text;

    for (var variableId in template.variables) {
        var variableText = pgf.descriptions.RenderVariable(variableId,
                                                           template.variables[variableId],
                                                           configuration);
        text = text.replace("[["+variableId+"]]", variableText);
    }
    return text;
};

pgf.descriptions.RenderVariable = function(variableId, values, configuration) {

    var text = "<div class='dropdown pgf-text-variable-"+variableId+"' style='display: inline;'>";
    text += "<a href='#' class='dropdown-toggle' data-toggle='dropdown'>";
    text += values[configuration[variableId]].text + "</a>";
    text += "<ul class='dropdown-menu'>";

    for (var valueId in values) {
        var value = values[valueId];
        var valueText = "<li><a href='#' class='pgf-change-variable-link'" +
            " data-variable='"+variableId+"' data-value='"+valueId+"'>" +
            value.text + "</a></li>";
        text += valueText;
    }

    text += "</ul></div>";

    return text;
};
