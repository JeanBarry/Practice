tailwind.config = {
  theme: {
    extend: {
        keyframes: {
            slideIn: {
                '0%': {
                    transform: 'translateY(50rem)'
                },
                    '100%': {
                    transform: 'translateY(0rem)'
                }
            },
            slideOut: {
                '0%': {
                    transform: 'translateY(0rem)'
                },
                '100%': {
                    transform: 'translateY(50rem)'
                }
            }
        },
        animation: {
            slideIn: 'slideIn 1s ease-in-out',
            slideOut: 'slideOut 1s ease-in-out'
        }
    }
  }
}