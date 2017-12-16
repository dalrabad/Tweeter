class Api::CommentsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Comment.all
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: { message: 'Could not create comment!'}, status: :unprocessable_entitiy
    end
  end

  def update
    comment = Comment.find(params[:id])
    post.update_attribute(Comment_params)
    render json: comment
  end

  def destroy
    Comment.find(params[:id]).destroy
    render json: { message: 'Comment deleted' }
  end

  Private

  def comment_params
    params.require(:comment).permit(:body, :author)
  end
  
end