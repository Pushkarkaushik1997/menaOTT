# OTT Streaming Application

A modern OTT streaming application designed for WebOS and Tizen TV platforms, built with React and optimized for TV interfaces. This project demonstrates TV-optimized UI/UX, component architecture, and navigation patterns for CTV applications.

## Design Decisions

### Architecture
- **React-based Architecture**: Chosen for its component-based structure and efficient rendering
- **SCSS Modules**: Used for scoped styling and better maintainability
- **TV-First Design**:  Uses @please/lrud for spatial navigation, ensuring all interactive elements are focusable and remote-friendly.
- **Performance**: Implements virtualization in carousels/rows to only render visible items, improving speed on TV devices.
- **Context API**: For state management to handle view updates and mock data
- **Persistence**: Device settings (rename/remove) are stored in localStorage for a persistent user experience.
- **Image Optimization**: Uses lazy loading and reduced resolution for hero/banner images to improve load times on TVs.

### UI/UX
- **Focus-Based Navigation**: Implemented focus states for TV remote navigation
- **Responsive Design**: Adapts to different TV screen sizes while maintaining TV-optimized layouts
- **Accessibility**: High contrast colors and clear focus indicators for better visibility
- **10-ft Experience**: UI elements sized and spaced for TV viewing distance

### Performance
- **Webpack Optimization**: Configured for optimal bundle size and loading performance
- **Lazy Loading**: Implemented for better initial load times
- **Asset Optimization**: Images and media optimized for TV displays

## Features

### Home Page
- Hero Banner with featured content
- Multiple content rails (horizontal carousels)
  - Popular Movies
  - Most Liked
  - Trending Shows
- Intuitive D-Pad navigation
  - Left/Right: Scroll within rails
  - Up/Down: Move between rails
  - Enter: Select content

### Settings Page
- Subscription Details
  - Plan information
  - Expiry/Renewal status
- Profile Settings
  - User profile management
  - Profile switching
- Device Settings
  - Device management
  - Device renaming/removal

## Known Limitations

1. **Platform Specific**
   - Limited to WebOS and Tizen platforms
   - Some features may behave differently across platforms
   - Remote control navigation patterns may vary

2. **Performance**
   - Initial load time might be slower on older TV models
   - Memory usage increases with longer viewing sessions
   - Large content libraries may impact navigation performance

3. **UI/UX**
   - Need optimisation for 720p and 4k devices.
   - Limited support for touch interactions
   - Focus management can be complex in nested components
   - Some animations may not be smooth on lower-end TV models
   - No Real Backend: All device/profile changes are local and not synced to a server.
   - Prompt for Rename: Uses window.prompt for renaming devices, which is not ideal for TV UX.
   - No User Authentication: Profiles are mock and not tied to real user accounts.
   - Limited Error Handling: Minimal feedback for failed actions (e.g., localStorage errors).

## TODOs

### High Priority
- [ ] Add comprehensive loading states for all async operations
- [ ] Add proper TV remote navigation support for all components
- [ ] Implement proper focus management system
- [ ] Integrate real backend for device/profile management.
- [ ] Add user authentication and real profile switching.

### Medium Priority
- [ ] Add unit tests for critical components
- [ ] Implement proper logging system
- [ ] Add performance monitoring
- [ ] Improve accessibility features
- [ ] Add proper documentation for components

### Low Priority
- [ ] Add more customization options for UI
- [ ] Implement advanced search features
- [ ] Add support for more TV platforms
- [ ] Improve offline capabilities
- [ ] Add more analytics tracking

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm 
- WebOS SDK (for WebOS development)
- Tizen SDK (for Tizen development)

### Installation
```bash
npm install
```

### Development

To start the development server for web:
``` start command for web
npm run start:dev
```
For WebOS:
``` start command for WebOS
npm run start:webos
```

For Tizen:
``` start command for Tizen
npm run start:tizen
```

### Build

To build the application for production:

For Tizen:
``` build command for Tizen
npm run build:tizen
```
For WebOS:
``` build command for WebOS
npm run build:webos
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author
Pushkar Kaushik

## License
This project is licensed under the MIT License - see the LICENSE file for details

