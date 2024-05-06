import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ThemeButton } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface IArticleViewSelector {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = ({ className, view, onViewClick }: IArticleViewSelector) => {
    const onClick = useCallback((newView: ArticleView) => () => {
        onViewClick?.(newView);
    }, [onViewClick]);

    return (
        <div>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}

                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view }, [className])}
                    />
                </Button>
            ))}
        </div>
    );
};
