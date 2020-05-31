import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const slider =
    trigger('routeAnimations', [
        // ---------- Home Route Animations ---------- //
        transition('Home => About', slideTo('left')),
        transition('Home => Resume', slideTo('right')),
        transition('Home => Projects', slideTo('right')),
        
        // ---------- About Route Animations ---------- //
        transition('About => Home', slideTo('right')),
        transition('About => Resume', slideTo('left')),
        transition('About => Projects', slideTo('left')),

        // ---------- Resume Route Animations ---------- //
        transition('Resume => Home', slideTo('left')),
        transition('Resume => About', slideTo('right')),
        transition('Resume => Projects', slideTo('right')),

        // ---------- Projects Route Animations ---------- //
        transition('Projects => About', slideTo('right')),
        transition('Projects => Resume', slideTo('left')),
        transition('Projects => Home', slideTo('left')),
    ]);

function slideTo(direction) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '110%' }))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' }))
            ])
        ]),
    ];
}