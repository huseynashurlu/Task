import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIssues, Issue } from '../utils/api';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function RepoIssues() {
  const { repo } = useParams<{ repo: string }>();
  const [loading, setLoading] = useState(true);
  const issues = useSelector((state: RootState) => state.issues);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getIssues(repo).then((data) => {
      dispatch({ type: 'SET_ISSUES', issues: data });
      setLoading(false);
    });
  }, [dispatch, repo]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(issues);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch({ type: 'SET_ISSUES', issues: items });
  };

  const getList = (title: string, issues: Issue[]) => {
    return(
        <div className="list">
            <h2>{title}</h2>
            <Droppable droppableId={title}>
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {issues.map((issue, index) => (
                    <Draggable key={issue.id} draggableId={issue.id} index={index}>
                      {(provided, snapshot) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={`issue ${snapshot.isDragging && "isDragging"}`}
                        >
                          <div className="issue-title">
                            <a href={issue.html_url} target="_blank" rel="noreferrer">
                              {issue.title}
                            </a>
                          </div>
                          <div className="issue-number">#{issue.number}</div>
                          {issue.assignee && (
                            <div className="issue-assignee">
                              <img src={issue.assignee.avatar_url} alt="assignee" />
                            </div>
                          )}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
        </div>
    );
}};

  export default RepoIssues;