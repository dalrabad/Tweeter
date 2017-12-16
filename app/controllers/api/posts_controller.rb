class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else 
      render json: {message: "could not create post"}, status: :unprocessable_entity
    end
  
  end

  def update
    post = Post.find(params[:id])
    post.update_attributesp(post_params)
    render json: post 
    
  end

  def destroy
    Post.find(params[:id]).destroy 
    render json: {message: "post destroyed"}
  end

  private 

    def post_params
      params.require(:post).permit(:body, :name, :image)
    end 

end
