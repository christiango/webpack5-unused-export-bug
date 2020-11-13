import { doSharedStuff } from './shared';
import { loadTheme, createTheme } from 'office-ui-fabric-react';

export const defaultLightTheme = createTheme({
    palette: {
        themePrimary: '#185abd'
    }
});

export class AppThemeManager {
    constructor() {
        this.theme = defaultLightTheme;
    }
    // Singleton
    static getInstance() {
        if (!AppThemeManager.instance) {
            AppThemeManager.instance = new AppThemeManager();
        }
        return AppThemeManager.instance;
    }
    getTheme() {
        return this.theme;
    }
    loadTheme(appTheme) {
        this.theme = appTheme;
        loadTheme(appTheme);
    }
}

export async function boot() {
    AppThemeManager.getInstance().getTheme();
    doSharedStuff();
}