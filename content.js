function isValidSocialMediaPage() {
  const footer = document.querySelector('.link-footer');
  if (!footer) return false;

  const links = Array.from(footer.querySelectorAll('a[href]'));
  const hasJoin = links.some(link => link.href.includes('https://joinmastodon.org/'));
  const hasGit = links.some(link => link.href.includes('https://github.com/mastodon/mastodon'));

  return hasJoin && hasGit;
}

function addDraftButton() {
    if (!isValidSocialMediaPage()) return;
    console.log('Adding Draft Button');
    dropdown = document.querySelector('.compose-form__dropdowns');
    if (dropdown && !document.querySelector('.compose-form__button.save-draft')) {
        saveDraft = document.createElement('button');
        saveDraft.className = 'compose-form__button.save-draft';
        saveDraft.textContent = 'Save Draft';
        dropdown.appendChild(saveDraft);
    }
}

// const observer = new MutationObserver(() => {
//   addDraftButton();
// });
// observer.observe(document.body, { childList: true, subtree: true });

// Initial check on load
addDraftButton();