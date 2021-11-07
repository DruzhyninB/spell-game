// Directives
import registerHoverDirective from './hover/hover.directive';

export default {
    install: (app) => {
        registerHoverDirective(app);
    }
}
