import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { HotKeys } from 'react-hotkeys';
import { useIntl, FormattedMessage, IntlShape, defineMessages } from 'react-intl';
import { NavLink, useHistory } from 'react-router-dom';

import Icon from 'soapbox/components/icon';
import AccountContainer from 'soapbox/containers/account_container';
import QuotedStatus from 'soapbox/features/status/containers/quoted_status_container';
import { defaultMediaVisibility } from 'soapbox/utils/status';

import StatusMedia from './status-media';
import StatusReplyMentions from './status-reply-mentions';
import StatusActionBar from './status_action_bar';
import StatusContent from './status_content';
import { HStack, Text } from './ui';

import type { Map as ImmutableMap, List as ImmutableList } from 'immutable';
import type {
  Account as AccountEntity,
  Attachment as AttachmentEntity,
  Status as StatusEntity,
} from 'soapbox/types/entities';

// Defined in components/scrollable_list
export type ScrollPosition = { height: number, top: number };

const messages = defineMessages({
  reblogged_by: { id: 'status.reblogged_by', defaultMessage: '{name} reposted' },
});

export const textForScreenReader = (intl: IntlShape, status: StatusEntity, rebloggedByText?: string): string => {
  const { account } = status;
  if (!account || typeof account !== 'object') return '';

  const displayName = account.display_name;

  const values = [
    displayName.length === 0 ? account.acct.split('@')[0] : displayName,
    status.spoiler_text && status.hidden ? status.spoiler_text : status.search_index.slice(status.spoiler_text.length),
    intl.formatDate(status.created_at, { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' }),
    status.getIn(['account', 'acct']),
  ];

  if (rebloggedByText) {
    values.push(rebloggedByText);
  }

  return values.join(', ');
};

interface IStatus {
  id?: string,
  contextType?: string,
  status: StatusEntity,
  account: AccountEntity,
  otherAccounts: ImmutableList<AccountEntity>,
  onClick: () => void,
  onReply: (status: StatusEntity) => void,
  onFavourite: (status: StatusEntity) => void,
  onReblog: (status: StatusEntity, e?: KeyboardEvent) => void,
  onQuote: (status: StatusEntity) => void,
  onDelete: (status: StatusEntity) => void,
  onEdit: (status: StatusEntity) => void,
  onDirect: (status: StatusEntity) => void,
  onChat: (status: StatusEntity) => void,
  onMention: (account: StatusEntity['account']) => void,
  onPin: (status: StatusEntity) => void,
  onOpenMedia: (media: ImmutableList<AttachmentEntity>, index: number) => void,
  onOpenVideo: (media: ImmutableMap<string, any> | AttachmentEntity, startTime: number) => void,
  onOpenAudio: (media: ImmutableMap<string, any>, startTime: number) => void,
  onBlock: (status: StatusEntity) => void,
  onEmbed: (status: StatusEntity) => void,
  onHeightChange: (status: StatusEntity) => void,
  onToggleHidden: (status: StatusEntity) => void,
  onShowHoverProfileCard: (status: StatusEntity) => void,
  muted: boolean,
  hidden: boolean,
  unread: boolean,
  onMoveUp: (statusId: string, featured?: boolean) => void,
  onMoveDown: (statusId: string, featured?: boolean) => void,
  getScrollPosition?: () => ScrollPosition | undefined,
  updateScrollBottom?: (bottom: number) => void,
  group: ImmutableMap<string, any>,
  displayMedia: string,
  allowedEmoji: ImmutableList<string>,
  focusable: boolean,
  featured?: boolean,
  withDismiss?: boolean,
  hideActionBar?: boolean,
  hoverable?: boolean,
}

const Status: React.FC<IStatus> = (props) => {
  const {
    status,
    focusable = true,
    hoverable = true,
    onToggleHidden,
    displayMedia,
    onOpenMedia,
    onOpenVideo,
    onClick,
    onReply,
    onFavourite,
    onReblog,
    onMention,
    onMoveUp,
    onMoveDown,
    muted,
    hidden,
    featured,
    unread,
    group,
    hideActionBar,
  } = props;

  const intl = useIntl();
  const history = useHistory();

  const didShowCard = useRef(false);
  const node = useRef<HTMLDivElement>(null);

  const [showMedia, setShowMedia] = useState<boolean>(defaultMediaVisibility(status, displayMedia));
  const [emojiSelectorFocused, setEmojiSelectorFocused] = useState(false);

  // Track height changes we know about to compensate scrolling.
  useEffect(() => {
    didShowCard.current = Boolean(!muted && !hidden && status?.card);
  }, []);

  useEffect(() => {
    setShowMedia(defaultMediaVisibility(status, displayMedia));
  }, [status.id]);

  const handleToggleMediaVisibility = (): void => {
    setShowMedia(!showMedia);
  };

  const handleClick = (): void => {
    if (onClick) {
      onClick();
    } else {
      history.push(`/@${_properStatus().getIn(['account', 'acct'])}/posts/${_properStatus().id}`);
    }
  };

  const handleExpandedToggle = (): void => {
    onToggleHidden(_properStatus());
  };

  const handleHotkeyOpenMedia = (e?: KeyboardEvent): void => {
    const status = _properStatus();
    const firstAttachment = status.media_attachments.first();

    e?.preventDefault();

    if (firstAttachment) {
      if (firstAttachment.type === 'video') {
        onOpenVideo(firstAttachment, 0);
      } else {
        onOpenMedia(status.media_attachments, 0);
      }
    }
  };

  const handleHotkeyReply = (e?: KeyboardEvent): void => {
    e?.preventDefault();
    onReply(_properStatus());
  };

  const handleHotkeyFavourite = (): void => {
    onFavourite(_properStatus());
  };

  const handleHotkeyBoost = (e?: KeyboardEvent): void => {
    onReblog(_properStatus(), e);
  };

  const handleHotkeyMention = (e?: KeyboardEvent): void => {
    e?.preventDefault();
    onMention(_properStatus().account);
  };

  const handleHotkeyOpen = (): void => {
    history.push(`/@${_properStatus().getIn(['account', 'acct'])}/posts/${_properStatus().id}`);
  };

  const handleHotkeyOpenProfile = (): void => {
    history.push(`/@${_properStatus().getIn(['account', 'acct'])}`);
  };

  const handleHotkeyMoveUp = (e?: KeyboardEvent): void => {
    onMoveUp(status.id, featured);
  };

  const handleHotkeyMoveDown = (e?: KeyboardEvent): void => {
    onMoveDown(status.id, featured);
  };

  const handleHotkeyToggleHidden = (): void => {
    onToggleHidden(_properStatus());
  };

  const handleHotkeyToggleSensitive = (): void => {
    handleToggleMediaVisibility();
  };

  const handleHotkeyReact = (): void => {
    _expandEmojiSelector();
  };

  const handleEmojiSelectorUnfocus = (): void => {
    setEmojiSelectorFocused(false);
  };

  const _expandEmojiSelector = (): void => {
    setEmojiSelectorFocused(true);
    const firstEmoji: HTMLDivElement | null | undefined = node.current?.querySelector('.emoji-react-selector .emoji-react-selector__emoji');
    firstEmoji?.focus();
  };

  const _properStatus = (): StatusEntity => {
    if (status.reblog && typeof status.reblog === 'object') {
      return status.reblog;
    } else {
      return status;
    }
  };

  if (!status) return null;
  const actualStatus = _properStatus();
  let prepend, rebloggedByText, reblogElement, reblogElementMobile;

  if (hidden) {
    return (
      <div ref={node}>
        {actualStatus.getIn(['account', 'display_name']) || actualStatus.getIn(['account', 'username'])}
        {actualStatus.content}
      </div>
    );
  }

  if (status.filtered || actualStatus.filtered) {
    const minHandlers = muted ? undefined : {
      moveUp: handleHotkeyMoveUp,
      moveDown: handleHotkeyMoveDown,
    };

    return (
      <HotKeys handlers={minHandlers}>
        <div className={classNames('status__wrapper', 'status__wrapper--filtered', { focusable })} tabIndex={focusable ? 0 : undefined} ref={node}>
          <FormattedMessage id='status.filtered' defaultMessage='Filtered' />
        </div>
      </HotKeys>
    );
  }

  if (featured) {
    prepend = (
      <div className='pt-4 px-4'>
        <HStack alignItems='center' space={1}>
          <Icon src={require('@tabler/icons/pinned.svg')} className='text-gray-600 dark:text-gray-400' />

          <Text size='sm' theme='muted' weight='medium'>
            <FormattedMessage id='status.pinned' defaultMessage='Pinned post' />
          </Text>
        </HStack>
      </div>
    );
  }

  if (status.reblog && typeof status.reblog === 'object') {
    const displayNameHtml = { __html: String(status.getIn(['account', 'display_name_html'])) };

    reblogElement = (
      <NavLink
        to={`/@${status.getIn(['account', 'acct'])}`}
        onClick={(event) => event.stopPropagation()}
        className='hidden sm:flex items-center text-gray-700 dark:text-gray-600 text-xs font-medium space-x-1 hover:underline'
      >
        <Icon src={require('@tabler/icons/repeat.svg')} className='text-green-600' />

        <HStack alignItems='center'>
          <FormattedMessage
            id='status.reblogged_by'
            defaultMessage='{name} reposted'
            values={{
              name: <bdi className='max-w-[100px] truncate pr-1'>
                <strong className='text-gray-800 dark:text-gray-200' dangerouslySetInnerHTML={displayNameHtml} />
              </bdi>,
            }}
          />
        </HStack>
      </NavLink>
    );

    reblogElementMobile = (
      <div className='pb-5 -mt-2 sm:hidden truncate'>
        <NavLink
          to={`/@${status.getIn(['account', 'acct'])}`}
          onClick={(event) => event.stopPropagation()}
          className='flex items-center text-gray-700 dark:text-gray-600 text-xs font-medium space-x-1 hover:underline'
        >
          <Icon src={require('@tabler/icons/repeat.svg')} className='text-green-600' />

          <span>
            <FormattedMessage
              id='status.reblogged_by'
              defaultMessage='{name} reposted'
              values={{
                name: <bdi>
                  <strong className='text-gray-800 dark:text-gray-200' dangerouslySetInnerHTML={displayNameHtml} />
                </bdi>,
              }}
            />
          </span>
        </NavLink>
      </div>
    );

    rebloggedByText = intl.formatMessage(
      messages.reblogged_by,
      { name: String(status.getIn(['account', 'acct'])) },
    );
  }

  let quote;

  if (actualStatus.quote) {
    if (actualStatus.pleroma.get('quote_visible', true) === false) {
      quote = (
        <div className='quoted-status-tombstone'>
          <p><FormattedMessage id='statuses.quote_tombstone' defaultMessage='Post is unavailable.' /></p>
        </div>
      );
    } else {
      quote = <QuotedStatus statusId={actualStatus.quote as string} />;
    }
  }

  const handlers = muted ? undefined : {
    reply: handleHotkeyReply,
    favourite: handleHotkeyFavourite,
    boost: handleHotkeyBoost,
    mention: handleHotkeyMention,
    open: handleHotkeyOpen,
    openProfile: handleHotkeyOpenProfile,
    moveUp: handleHotkeyMoveUp,
    moveDown: handleHotkeyMoveDown,
    toggleHidden: handleHotkeyToggleHidden,
    toggleSensitive: handleHotkeyToggleSensitive,
    openMedia: handleHotkeyOpenMedia,
    react: handleHotkeyReact,
  };

  const statusUrl = `/@${actualStatus.getIn(['account', 'acct'])}/posts/${actualStatus.id}`;

  return (
    <HotKeys handlers={handlers} data-testid='status'>
      <div
        className={classNames('status cursor-pointer', { focusable })}
        tabIndex={focusable && !muted ? 0 : undefined}
        data-featured={featured ? 'true' : null}
        aria-label={textForScreenReader(intl, actualStatus, rebloggedByText)}
        ref={node}
        onClick={() => history.push(statusUrl)}
        role='link'
      >
        {prepend}

        <div
          className={classNames('status__wrapper', `status-${actualStatus.visibility}`, {
            'status-reply': !!status.in_reply_to_id,
            muted,
            read: unread === false,
          })}
          data-id={status.id}
        >
          {reblogElementMobile}

          <div className='mb-4'>
            <AccountContainer
              key={String(actualStatus.getIn(['account', 'id']))}
              id={String(actualStatus.getIn(['account', 'id']))}
              timestamp={actualStatus.created_at}
              timestampUrl={statusUrl}
              action={reblogElement}
              hideActions={!reblogElement}
              showEdit={!!actualStatus.edited_at}
              showProfileHoverCard={hoverable}
              withLinkToProfile={hoverable}
            />
          </div>

          <div className='status__content-wrapper'>
            {!group && actualStatus.group && (
              <div className='status__meta'>
                Posted in <NavLink to={`/groups/${actualStatus.getIn(['group', 'id'])}`}>{String(actualStatus.getIn(['group', 'title']))}</NavLink>
              </div>
            )}

            <StatusReplyMentions
              status={actualStatus}
              hoverable={hoverable}
            />

            <StatusContent
              status={actualStatus}
              onClick={handleClick}
              expanded={!status.hidden}
              onExpandedToggle={handleExpandedToggle}
              collapsable
            />

            <StatusMedia
              status={actualStatus}
              muted={muted}
              onClick={handleClick}
              showMedia={showMedia}
              onToggleVisibility={handleToggleMediaVisibility}
            />

            {quote}

            {!hideActionBar && (
              // @ts-ignore
              <StatusActionBar
                emojiSelectorFocused={emojiSelectorFocused}
                handleEmojiSelectorUnfocus={handleEmojiSelectorUnfocus}
                {...props}
                status={actualStatus}
              />
            )}
          </div>
        </div>
      </div>
    </HotKeys>
  );
};

export default Status;
