import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * SignIn11235 - Pixel-perfect Sign In screen (11:235) rendered in React.
 * - Imports CSS from public/assets to preserve exact measurements and z-index.
 * - Uses image paths under /assets/figmaimages/... that are already available in public.
 * - Ports minimal interaction from sign-in-11-235.js (pressed state and click hook) into React.
 */
export default function SignIn11235() {
  useEffect(() => {
    // Inject external CSS from public/assets to preserve exact measurements
    const commonLink = document.createElement('link');
    commonLink.rel = 'stylesheet';
    commonLink.href = '/assets/common.css';
    commonLink.dataset.injected = 'sign-in-common';

    const screenLink = document.createElement('link');
    screenLink.rel = 'stylesheet';
    screenLink.href = '/assets/sign-in-11-235.css';
    screenLink.dataset.injected = 'sign-in-11235';

    document.head.appendChild(commonLink);
    document.head.appendChild(screenLink);

    // Port of initSignInScreenInteractions from sign-in-11-235.js
    const cta = document.getElementById('btn-54-668');
    if (!cta) return;
    const down = () => (cta.style.filter = 'brightness(0.95)');
    const up = () => (cta.style.filter = '');

    cta.addEventListener('mousedown', down);
    cta.addEventListener('mouseup', up);
    cta.addEventListener('mouseleave', up);
    cta.addEventListener('touchstart', down, { passive: true });
    cta.addEventListener('touchend', up, { passive: true });
    const clickHandler = () => {
      // Hook for Sign In action integration point
      // eslint-disable-next-line no-console
      console.log('Sign In clicked');
    };
    cta.addEventListener('click', clickHandler);

    return () => {
      cta.removeEventListener('mousedown', down);
      cta.removeEventListener('mouseup', up);
      cta.removeEventListener('mouseleave', up);
      cta.removeEventListener('touchstart', down);
      cta.removeEventListener('touchend', up);
      cta.removeEventListener('click', clickHandler);

      // Remove injected link tags if present
      const links = document.querySelectorAll('link[data-injected="sign-in-common"], link[data-injected="sign-in-11235"]');
      links.forEach((lnk) => lnk.parentNode && lnk.parentNode.removeChild(lnk));
    };
  }, []);

  return (
    <div id="screen-sign-in-11-235" className="figma-screen style-10" aria-label="Sign In Screen 11:235">
      <div id="root-11-235">
        {/* Title Group */}
        <div id="grp-13-110">
          {/* Hello, */}
          <div id="txt-12-29" className="typo-60">
            <span>Hello,</span>
          </div>
          {/* Welcome Back! */}
          <div id="txt-12-30" className="typo-61">
            <span>Welcome Back!</span>
          </div>
        </div>

        {/* Input field Email */}
        <div id="comp-30-585">
          <div id="rect-30-585-298" className="style-30"></div>
          <div id="txt-30-585-300" className="typo-65">
            <span>Enter Email</span>
          </div>
          <div id="txt-30-585-301" className="typo-66">
            <span>Email</span>
          </div>
        </div>

        {/* Input field Password */}
        <div id="comp-30-590">
          <div id="rect-30-590-298" className="style-30"></div>
          <div id="txt-30-590-300" className="typo-65">
            <span>Enter Password</span>
          </div>
          <div id="txt-30-590-301" className="typo-66">
            <span>Enter Password</span>
          </div>
        </div>

        {/* Forgot Password */}
        <div id="grp-12-91">
          <div id="txt-12-94" className="typo-62">
            <span>Forgot Password?</span>
          </div>
        </div>

        {/* OR Line & Text */}
        <div id="grp-12-139">
          <div id="line-12-140" className="style-28"></div>
          <div id="txt-12-142" className="typo-64">
            <span>Or Sign in With</span>
          </div>
          <div id="line-12-141" className="style-28"></div>
        </div>

        {/* Google Button */}
        <div id="btn-13-35">
          <div id="rect-13-36" className="style-126"></div>
          <div id="comp-13-48" className="style-2">
            <img id="icon-13-39" src="/assets/figmaimages/figma_image_30_811.png" alt="Google Vector" />
            <div id="icon-13-40" className="style-22"></div>
            <div id="icon-13-41" className="style-23"></div>
            <img id="icon-13-42" src="/assets/figmaimages/figma_image_30_841.png" alt="Google Vector 4" />
          </div>
        </div>

        {/* Facebook Button */}
        <div id="btn-13-49">
          <div id="rect-13-50" className="style-126"></div>
          <div id="grp-13-58">
            <div id="icon-13-60" className="style-25"></div>
            <img id="icon-13-61" src="/assets/figmaimages/figma_image_30_781.png" alt="facebook" />
            <div id="icon-13-62" className="style-27"></div>
          </div>
        </div>

        {/* CTA Button */}
        <div id="btn-54-668" className="style-11" role="button" aria-label="Sign In">
          <div id="txt-54-668-624" className="typo-58">
            <span>Sign In</span>
          </div>
          <div id="comp-54-668-625">
            <div id="rect-54-668-625-3256" className="style-12"></div>
            <div id="grp-54-668-625-3257" className="style-2"></div>
            <div id="icon-54-668-625-3258" className="style-3"></div>
            <div id="icon-54-668-625-3259" className="style-3"></div>
          </div>
        </div>

        {/* Bottom Sign up text */}
        <div id="txt-13-67" className="typo-63">
          <span>Don’t have an account? Sign up</span>
        </div>

        {/* Status Bar */}
        <div id="comp-13-71">
          <div id="frm-13-71-302" className="style-2">
            <div id="grp-13-71-303" className="style-2">
              <div id="grp-13-71-304" className="style-33">
                <div id="grp-13-71-305" className="style-14"></div>
                <img id="icon-13-71-306" src="/assets/figmaimages/figma_image_100_2539.png" alt="battery-path" />
                <img id="icon-13-71-307" src="/assets/figmaimages/figma_image_100_2508.png" alt="battery-outline" />
              </div>
              <img id="rect-13-71-309" src="/assets/figmaimages/figma_image_257_2684.png" alt="battery-fill" />
            </div>
            <div id="grp-13-71-310" className="style-35">
              <img id="rect-13-71-311" src="/assets/figmaimages/figma_image_100_2375.png" alt="cell-1" />
              <img id="rect-13-71-312" src="/assets/figmaimages/figma_image_100_2357.png" alt="cell-2" />
              <img id="rect-13-71-313" src="/assets/figmaimages/figma_image_100_2329.png" alt="cell-3" />
              <img id="rect-13-71-314" src="/assets/figmaimages/figma_image_55_1528.png" alt="cell-4" />
            </div>
            <div id="grp-13-71-315" className="style-35">
              <div id="icon-13-71-316" className="style-3"></div>
              <div id="icon-13-71-317" className="style-3"></div>
              <div id="icon-13-71-318" className="style-3"></div>
            </div>
          </div>
          <div id="frm-13-71-319">
            <div id="txt-13-71-320" className="typo-67">
              <span>19:27</span>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div id="comp-42-614">
          <div id="rect-42-614-603" className="style-32"></div>
        </div>
      </div>
    </div>
  );
}
