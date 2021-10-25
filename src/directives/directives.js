// Directives
import hoverDirective from './hover/hover.directive';

export default {
    install: (app) => {
        app.directive('hover', hoverDirective);
    }
}
